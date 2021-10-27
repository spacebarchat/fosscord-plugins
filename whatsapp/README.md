# WhatsApp compatibility

A plugin for the Fosscord client to add WhatsApp compatibility and send messages to your friends who are still using WhatsApp.

## Implementation

1. The user will enter their phone number and a one time code will get send to their number by WhatsApp.
2. The Fosscord server will create an android virtual machine with WhatsApp and complete the registration.
3. The registration process will be proxied through the users device so the servers will not get flagged and abused.
4. The Multi-Device (Beta) will automatically be enabled and the retrieved WhatsApp Web device key will be transfered to the user.
5. The virtual machine is reset and all user-related data is securely deleted.
6. The client proceedes to connect to WhatsApp Web's backend server using [Baileys](https://github.com/adiwajshing/Baileys).
7. The user can now communicate with their friends who are "still" using WhatsApp.

_(coming soon)_
