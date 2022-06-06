module.exports = {
  name: 'guildMemberAdd',
  once: false,
  async execute(member) {

if (member.partial) await member.fetch();
  
    
  }
}