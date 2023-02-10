// const pool=require('./connect');


// async function GetStudents(){
//     const [students]=await pool.execute('SELECT * FROM mongol');
//     return students
// }
// async function PostStudents({name}){ 
//     console.log("A1", name)
//     const data=await pool.query(`insert into mongol(firstname) value('${name}')`);
//     return data
// }

// module.exports = {
//     GetStudents: GetStudents,
//     PostStudents:PostStudents
// }



const pool = require('./connect');

async function getStudents(){
    const students = await pool.execute(`select * from login`);
    return students
}
async function postStudents(username,password){
    const data = await pool.execute(`insert into login(name,password) value('${username}','${password}')`);
    return data
}
async function getStudentId(id){
    const data = await pool.execute(`select * from login where id=${id}`);
return data
}
module.exports={
    getStudents,
    postStudents,
    getStudentId
}