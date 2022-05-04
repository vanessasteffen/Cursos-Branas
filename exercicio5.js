
const DatabaseError = function (statement, message){
    this.statemente = statement;
    this.message = message;
};

const database = {
    tables: {},
    createTable(statement){
        const regexp = /create table ([a-z]+) \((.+)\)/;
        const parsedStatement = statement.match(regexp);
        const tableName = parsedStatement[1];
        this.tables[tableName] = {
            columns: {},
            data: []
        }
        let columns = parsedStatement[2];
        columns = columns.split(",");
        for (let column of columns){
            column = column.trim().split(" ");
            const name = column[0];
            const type = column[1];
            this.tables[tableName].columns[name] = type;
        }
    },
    insert(statemente){
        const regexp = /insert into ([a-z]+)/;
        const parseStatement = statemente.match(regexp);
        const [,tableName]= parseStatement[1];
        console.log(parseStatement);
    },
    execute(statement ) {
        if (statement.startsWith("create table")) {
            return this.createTable(statement);
        }
        if (statement.startsWith('insert')){
            return this.insert(statement);
        }
        const message = `Syntax error: "${statement}"`;
        throw new DatabaseError(statement, message);
    }
};
try {
    database.execute("create table author (id number, name string, age number, city string, state string, country string)");
    database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");
    database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
    database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");
    //database.execute("create table author (id number, name string, age number, city string, state string, country string)");
   // database.execute("select id, name from author");
    //console.log(JSON.stringify(database, undefined, " "));
}catch (e){
    console.log(e.message);
}