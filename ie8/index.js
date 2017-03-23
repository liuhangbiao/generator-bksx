var Generator = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk'); 
module.exports = class extends Generator{
	constructor(args, opts) {
	    super(args, opts);
	}
	initializing(){
		//初始化
		this.log(yosay('北控三兴web前端欢迎您！\n congratulations,\n you\'re going to bulid a webProject, \n the best wishes for you \n no bug!'));
		this.log(chalk.magenta('ie8'));
	}
}