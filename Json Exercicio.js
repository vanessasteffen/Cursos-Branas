const statement = "create table author ( id number, age number, city string, state string, country string )";
const regexp = /create table ([a-z]+) \((.+)\)/;
const parsedStatement = statement.match(regexp);
const tableName = parsedStatement[1];
let columns = parsedStatement[2];
columns =columns.split(", ");

//criando o batabase
const database = {
//dentro de database com objeto chamado TABLES
    tables: {
        //criar um objeto com o nome da tabela
        [tableName]: {
            //dentro dp objeto criar um nome de tabela com o nome columns
            columns:{},
            data: []
        }
    }
};
for (let column of columns){
    column = column.trim().split(" ");
    const name = column[0];
    const type = column[1];
    database.tables[tableName].columns[name] = type;

}


console.log(JSON.stringify(database, undefined, " "));
//console.log(tableName);
//console.log(columns);