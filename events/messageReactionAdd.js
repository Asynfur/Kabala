module.exports = {
  name: 'messageReactionAdd',
  once: false,
  async execute(reaction, user) {

if (reaction.partial) await reaction.fetch();

    if (reaction.message.id == '' && reaction.emoji.name == ''){

      
    }
    
  }
}