const { createCanvas, loadImage } = require("canvas");

module.exports = {
name: 'rank',
  category: 'Information',
  	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!')
      .addUserOption(option => 
        )
  
  execute(interaction) {

    const canvas = createCanvas(1000, 333)
    const ctx = canvas.getContext("2d");
    const background = await loadImage(join(__dirname, "..", "img", "wallpaper.png"));
    ctx.fillStyle = rankCard.backgroundColor
    ctx.fillRect(0,0,canvas.width,canvas.height)
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);


    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#A3A3A3"
    ctx.globalAlpha = 0.2;
    ctx.fillStyle = "#000000"
    ctx.fillRect(180, 216, 775, 65);
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.strokeRect(180, 216, 775, 65);
    ctx.stroke();

    ctx.fillStyle = rankCard.barColor;
    ctx.globalAlpha = 0.6;
    ctx.fillRect(200, 216, ((100 / (score.level * 2 * 250 + 250)) * score.xp) * 7.5, 65);
    ctx.fill();
    ctx.globalAlpha = 1;

    ctx.font = '30px sans-serif';
    ctx.textAlign = "center";
    ctx.fillStyle = rankCard.textColor;
    ctx.fillText(`${xpInfo} / ${nextXP} XP`, 600, 260);

   ctx.font = '35px sans-serif';
    ctx.textAlign = "left";
    ctx.fillText(user.user.tag, 325, 125);

    ctx.font = '40px sans-serif';
    ctx.fillText("Level: ", 350, 170);
    ctx.fillText(levelInfo, 500, 170);

    ctx.font = '40px sans-serif';
    ctx.fillText("Rank: ", 700, 170);
    ctx.fillText(ranking, 830, 170);

    ctx.arc(170, 160, 120, 0, Math.PI * 2, true);
    ctx.lineWidth = 6;
    ctx.strokeStyle = "WHITE"
    ctx.stroke();
    ctx.closePath();
    ctx.clip();
    const avatar = await loadImage(user.user.displayAvatarURL({ format: "jpg" }));
    ctx.drawImage(avatar, 40, 40, 250, 250);

    const attachments = new Discord.MessageAttachment(canvas.toBuffer(), "rank.png");
    message.channel.send(attachments);
    }
}
  }
}