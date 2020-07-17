const PubNub = require('pubnub');
const _cliProgress = require('cli-progress');
const readline = require("readline");
const fs = require('file-system');
let keys;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Where the config file containing the private PubNub Keys used by the live event demo is located.
//They can be edited manually or ran by this script.
const CONFIG_FILE = 'src/config/pubnub-keys.json';
const PAYLOAD_FILE = 'src/tools/sample.json';
const UUIDstamped001 = PubNub.generateUUID();

function addKeysAndStartScript() {
    console.log('\n*** A PubNub account is required. ***');
    console.log('\nVisit the PubNub dashboard to create an account or login.');
    console.log('\n     https://dashboard.pubnub.com/');
    console.log('\nCreate a new chat app or locate your chat app in the dashboard.');
    console.log('\nCopy and paste your publish key and then your subscribe key below.');
    rl.question("\nEnter your publish key: ", publishKey => {
        rl.question("Enter your subscribe key: ", subscribeKey => {
            if (publishKey.startsWith('pub') && subscribeKey.startsWith('sub')) {
                const updateKeys = {
                    "publishKey": publishKey,
                    "subscribeKey": subscribeKey
                };
                if(!keys) {
                    fs.openSync(CONFIG_FILE, 'a'); 
                    console.log(`\n${CONFIG_FILE} file for storing your publish and subscribe key is created.`)
                }
                fs.writeFile(CONFIG_FILE, JSON.stringify(updateKeys), (err) => {
                    if (!err) console.log( `\nYour keys have been saved to ${CONFIG_FILE} file.`);
                     scriptStart(publishKey, subscribeKey, `liveeventdemo.row1`);
                    console.log("Sending msgs completed.");

                });
            } 
            else {
                console.log('\nYou entered invalid keys format!');
                process.exit(1);
            }
        });
    });
}

function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    );
  }

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }

const waitFor = (ms) => new Promise(r => setTimeout(r, ms));
  

  const scriptStart = async (publishKey, subscribeKey, channelName) => {

    console.log(`Firehose process activating on the "${channelName}" channel`);

    var pubnub = new PubNub({
        subscribeKey: subscribeKey,
        publishKey: publishKey,
        uuid: UUIDstamped001,
        logVerbosity:  false, 
        requestMessageCountThreshold: 200, //PNRequestMessageCountExceededCategory is thrown when the number of messages into the payload is above of requestMessageCountThreshold.
        restore: false, //true to allow catch up on the front-end applications.
        keepAlive: true, //If set to true, SDK will use the same TCP connection for each HTTP request, instead of opening a new one for each new request.
        //origin: 'ps.pndsn.com', //If a custom domain is required, SDK accepts it here.
        ssl: true,
        listenToBrowserNetworkEvents: true, //If the browser fails to detect the network changes from WiFi to LAN and vice versa or you get reconnection issues, set the flag to false. This allows the SDK reconnection logic to take over.
        suppressLeaveEvents: true, //When true the SDK doesn't send out the leave requests.
    });

    console.log(`Firehose process acquired PubNub connection.`);
    
while (true) {
    const jsonObject=JSON.parse(fs.readFileSync(PAYLOAD_FILE, 'utf8'));
    console.log(`Press ^C to quit.`);
    var objectKeysArray = Object.keys(jsonObject);

    await asyncForEach(objectKeysArray, async (index) => {
        
        await waitFor(between(200,600));
        var objValue = jsonObject[index];
      console.log(`Sending msg w/ timetoken`);

      var filterMessageJSON =  {};
      if (index%7 == 0){
        console.log(`Setting up as  offensive message.`);
       filterMessageJSON = {
        };
    } else {
        filterMessageJSON = {
                "language_tone":"offensive"
        };

    }

    const msgPayload = {
        message: objValue,
        channel: channelName,
        sendByPost: true, // true to send via post, uses compression.
        ttl: 1, //How many hours to store the messages in history. Matches a one hour event.
        storeInHistory: false, //We do not store history for this demo.
        meta: filterMessageJSON, // publish extra meta with the request
    };
    console.log(`payload: ${JSON.stringify(msgPayload)}`);

      pubnub.publish(
        msgPayload, 
        function (status, response) {
              if (status.error) {
                  // handle error
                  console.log(`ERROR publishing message from PubNub SDK: ${status.error}`);
              } else {
                  console.log(`message Published through PubNub SDK w/ timetoken ${response.timetoken}`);
              }
          }

      );
      console.log(index);
    });
    console.log('Done');

}
};
/*
To check that the file exists and contains the keys run with the --check switch.
*/
try {
    console.log(`\nLooking for PubNub keys in ${CONFIG_FILE}`);
    var rawdata = null;
    try{
        rawdata = fs.readFileSync(CONFIG_FILE);
        if (!rawdata || (rawdata == "")) {
            console.log(`\nError looking for PubNub keys in ${CONFIG_FILE}, No file or no keys in file?`);
            process.exit(0);
        }
    }
    catch (e) {
        if (e == NOENT) {
            console.log(`\nError no file for keys ${CONFIG_FILE} ${e}`);
            process.exit(0);
        } else {
            console.log(`\nError looking for PubNub keys in ${CONFIG_FILE} ${e}`);
            process.exit(0);
        }

    }
    keys = JSON.parse(rawdata);
    if(keys && keys.publishKey.length && keys.subscribeKey.length) {

        if (process.argv[2] == 'help') {
            console.log(`"node ./firehose.js check" to verify keys \
                \n"node ./firehose.js start" to start the firehose`);
            process.exit(0);
        } else if (process.argv[2] == 'check') {
            console.log(`Checking Keys. Keys are readable OK`);
            process.exit(0);
        } else  if (process.argv[2] == 'start') {
            console.log(`Keys detected in ${CONFIG_FILE}.\nStarting firehose.`);
            console.log(`Just checking...`);
            if (process.argv[3]) {
                console.log(`Starting firehose on channel "${process.argv[3]}".`);
                scriptStart(keys.publishKey, keys.subscribeKey, process.argv[3]);
            } else {
                console.log(`Add the channel name after the command, example: "node ./firehose.js start chatchannel001"`);
                process.exit(0);
            }
        } else {
            console.log(`This is a firehose, so it's better with an extra switch: add help to the command \
            \nto find out where the switch is!`);
        }
    }
    else {
        console.log(`Keys not detected in ${CONFIG_FILE}.\nContent is: ${rawdata}`);
        addKeysAndStartScript();
    }


    //in case of empty pub&sub values
} catch (e) {
    addKeysAndStartScript(); //in case of non-xisting keys file
}

