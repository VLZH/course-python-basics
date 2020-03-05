module.exports = {
    docsSidebar: {
        Общее: ["intro", "general/languages"],
        Python: [
            "python/syntax",
            "python/operators",
            "python/statements",
            "python/functions",
            "python/basic_types",
            "python/fp",
            "python/modules_and_packets",
            "python/classes"
        ],
        Модули: ["modules/os", "modules/re"],
        Дополнительное: [
            "additional/telegram_bot_workshop",
            "additional/git",
            "additional/recommended",
            "additional/protocols",
            "additional/wsgi",
            {
                type: "category",
                label: "DB",
                items: ["additional/db/db", "additional/db/sql"]
            }
        ],
        Домашки: ["homeworks/farm"]
    }
};
