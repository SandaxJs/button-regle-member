const Discord = require('discord.js');

const Client = new Discord.Client({intents: 32757 });

const { CommandInteraction, MessageEmbed, interaction } = require('discord.js');

const { SlashCommandBuilder } = require('@discordjs/builders'); 

const { MessageMenuOption, MessageMenu, MessageActionRow, MessageButton } = require("discord.js")



const prefix = "!";

module.exports = {
    name: "twitch",
    execute(Client, message, args) {
        {

            const membre = message.guild.roles.cache.get('922861018600841258'); // role membre 
          

           
         const row = new MessageActionRow()
          .addComponents(
           new MessageButton()
             .setCustomId('membre')
            .setEmoji("<a:red_verification1:936141177554624522>")
            .setLabel('𝗔𝗰𝗰𝗲𝗽𝘁𝗲𝗿 𝗹𝗲𝘀 𝗿𝗲̀𝗴𝗹𝗲𝘀')
            .setStyle('SUCCESS'),


        
     
    );  

            const embed = new MessageEmbed()
            .setDescription("__**8 - STREAMING/DIFFUSION EN DIRECT** __\n\n **8.1) Aucun Streamsnipe n’est toléré \n8.2) Aucune information retirée d'un stream/twitch ne peut être mentionnée même si le joueur\nn'est pas en ville. Cette information n'existe pas en RP.\n8.3) Le stream/twitch peut être utilisé comme preuve d’infraction à un règlement de la part d'un\njoueur en ville, même si les actions sont commises par le joueur qui streame. La preuve n’a pas\nforcément besoin de venir du streamer lui-même.\n8.4) Évitez de streamer ce contenu:\n-Parler ou diffuser les points chauds (drogues et blanchiment) est interdit**")
            .setColor("#d5aabc")
            
            message.channel.send({embeds: [embed], components: [row] });
            
            Client.on("interactionCreate", async interaction =>  {
                if(interaction.isButton()){

                     // ROLE LIVE 
                    interaction.deferUpdate();
                    if(interaction.customId === "membre")
                    interaction.member.roles.add("922861018600841258")
 // REMOVE
                    if(interaction.customId === "membre")
                    if(interaction.member.roles.cache.has("922861018600841258")) {
                    interaction.member.roles.remove(membre)
                         }
                     //================================================================================================
                    
                     
                      interaction.followUp({ content: " <a:valid:933726196125028413> **Vous avez accepter les règles. __Bienvenue sur FlashModz__**", ephemeral: true })

                    

          .then(console.log)
          .catch(console.error)
                }
            })
             }
            
            ;   
        }
    }



        
 
