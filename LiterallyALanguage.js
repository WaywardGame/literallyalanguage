define(["require", "exports", "language/ILanguage", "language/Language", "mod/Mod", "Utilities"], function (require, exports, ILanguage_1, Language_1, Mod_1, Utilities) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class LiterallyALanguage extends Mod_1.default {
        onInitialize() {
            const english = languageManager.getLanguage("English");
            if (!english) {
                return;
            }
            this.language = new Language_1.default("Literally a Language");
            const dictionaries = Utilities.Enums.getValues(ILanguage_1.Dictionary);
            for (const dictionaryId of dictionaries) {
                if (dictionaryId === ILanguage_1.Dictionary.Ui) {
                    continue;
                }
                const dictionary = english.getDictionary(dictionaryId);
                const newDictionary = {};
                const keys = Object.keys(dictionary);
                for (const key of keys) {
                    const index = parseInt(key, 10);
                    const value = dictionary[index];
                    if (value) {
                        const definition = {
                            name: value.name,
                            description: value.description,
                            prefix: value.prefix,
                            suffix: value.suffix
                        };
                        if (definition.name && dictionaryId !== ILanguage_1.Dictionary.Item) {
                            definition.name = `Literally ${definition.name}`;
                        }
                        if (definition.description) {
                            definition.description = `Literally ${definition.description}`;
                        }
                        if (definition.prefix) {
                            definition.prefix = `Literally ${definition.prefix.toLowerCase()}`;
                        }
                        newDictionary[index] = definition;
                    }
                }
                this.language.setDictionaryRaw(dictionaryId, newDictionary);
            }
            languageManager.add(this.language);
        }
        onUninitialize() {
            if (this.language) {
                languageManager.remove(this.language);
                this.language = undefined;
            }
        }
    }
    exports.default = LiterallyALanguage;
});
//# sourceMappingURL=LiterallyALanguage.js.map