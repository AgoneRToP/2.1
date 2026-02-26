const fs = require("node:fs")

const dataJSON = [
    {
        id: 1,
        name: "Rexar",
        age: 43,
        year: 1983,
        profession: "Hunter"
    },
    {
        id: 2,
        name: "Illidan",
        age: 102,
        year: 1924,
        profession: "Monk"
    },
    {
        id: 3,
        name: "Arthas",
        age: 26,
        year: 2000,
        profession: "Guard"
    },
    {
        id: 4,
        name: "Thrall",
        age: 20,
        year: 2006,
        profession: "Garden"
    },
    {
        id: 5,
        name: "Maev",
        age: 98,
        year: 1928,
        profession: "Warden"
    },
]

fs.writeFile("./amal.json", JSON.stringify(dataJSON,null,2),(err)=>{
    if(err){
        console.error(err)
    }

    console.log("yaratildi")
})

function sortJSON(){
    fs.readFile("./amal.json", {encoding: "utf-8"}, (err, data)=>{
        if(err){
            console.error(err)
        }
    
        const list = JSON.parse(data)
    
        list.sort((a, b) => a.age - b.age)
    
        console.log(list)
    })
}

sortJSON()

fs.readFile('./amal.json', {encoding: "utf-8"}, (err, data) => {
    if(err) {
        console.error("Ошибка при чтении:", err);
        return;
    }

    const users = JSON.parse(data);
    
    const newUser = {
        id: users.length + 1,
        name: "Jaina",
        age: 35,
        year: 1991,
        profession: "Mage",
        isMarried: false,
        nationality: "Kul Tiran",
        city: "Dalaran"
    };

    users.push(newUser);

    fs.writeFile('./amal.json', JSON.stringify(users, null, 2), (err) => {
        if (err) {
            console.error("Ошибка при записи:", err);
            return;
        }
        console.log("Новый пользователь успешно добавлен!");
    });
});

fs.unlink("./amal.json", (err) => {
    if (err) {
        console.error("Не удалось удалить файл:", err.message);
        return;
    }
    console.log("Файл amal.json успешно удален!");
})

fs.rmdir("2.2.1/data", (err) => {
    if (err) {
        console.error("Ошибка при удалении папки:", err.message);
        return;
    }
    console.log("Папка и всё её содержимое успешно удалены!");
});