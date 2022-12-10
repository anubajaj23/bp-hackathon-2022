const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
 
const myGroupName = "Parkation_poc";
const contactName = "Neha Akqa";
 
const client = new Client({
  authStrategy: new LocalAuth(),
});
 
client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});
 


client.on("ready", () => {
  console.log("Client is ready!");
  client.getChats().then((chats) => {
    console.log(chats[0], 'chat')
    const myGroup = chats.find((chat) => chat.name === myGroupName);

    client.sendMessage(myGroup.id._serialized, 'Hey Buddy! Lets pool together');

    client.getContacts().then((contacts) => {
      //console.log(contacts, 'cotacts')
      const contactToAdd = contacts.find(
        // Finding the contact Id using the contact's name
        (contact) => contact.name === contactName
      );

      console.log(contactToAdd, 'adding', '+++++++++', contactToAdd.id._serialized)
      if (contactToAdd) {
        myGroup.addParticipants([contactToAdd.id._serialized])
          .then(() =>
            console.log(
              `Successfully added ${contactName} to the group ${myGroupName}`
            )
          );
      } else {
        console.log("Contact not found");
      }
    });
  });
});
 
client.initialize();