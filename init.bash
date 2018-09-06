#makes user table
# sequelize model:generate --name user --attributes name:string,userName:string,email:string,password:string,phoneNum:string,project_id:integer

# #makes project table
# sequelize model:generate --name project --attributes projectName:string,teamLead:string,startDate:date,endDate:date,user_id:integer

#makes budget table
# sequelize model:generate --name budget --attributes projectName:string,startDate:date,endDate:date,budget:integer,expenseLog:string,project_id:integer

#makes message table
# sequelize model:generate --name message --attributes text:text,project_id:integer

#personal log table
# sequelize model:generate --name personalLog --attributes user_id:integer,task:string,startDate:date,endDate:date,project_id:integer

#task table
# sequelize model:generate --name task --attributes project_id:integer,mainTask:string,description:text

#sub class table
# sequelize model:generate --name subTask --attributes task:string,description:text,user_id:integer,project_id:integer,task_id:integer