define(["require", "exports", "language/ILanguage", "language/Language", "mod/Mod", "utilities/enum/Enums"], function (require, exports, ILanguage_1, Language_1, Mod_1, Enums_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class LiterallyALanguage extends Mod_1.default {
        onInitialize() {
            const english = languageManager.getLanguage("English");
            if (!english) {
                return;
            }
            this.language = new Language_1.default("Literally a Language");
            const dictionaries = Enums_1.default.values(ILanguage_1.Dictionary);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGl0ZXJhbGx5QUxhbmd1YWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTGl0ZXJhbGx5QUxhbmd1YWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUtBLHdCQUF3QyxTQUFRLGFBQUc7UUFHM0MsWUFBWTtZQUNsQixNQUFNLE9BQU8sR0FBRyxlQUFlLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2IsT0FBTzthQUNQO1lBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGtCQUFRLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUVyRCxNQUFNLFlBQVksR0FBRyxlQUFLLENBQUMsTUFBTSxDQUFDLHNCQUFVLENBQUMsQ0FBQztZQUM5QyxLQUFLLE1BQU0sWUFBWSxJQUFJLFlBQVksRUFBRTtnQkFDeEMsSUFBSSxZQUFZLEtBQUssc0JBQVUsQ0FBQyxFQUFFLEVBQUU7b0JBQ25DLFNBQVM7aUJBQ1Q7Z0JBRUQsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDdkQsTUFBTSxhQUFhLEdBQXNCLEVBQUUsQ0FBQztnQkFFNUMsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDckMsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7b0JBQ3ZCLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQ2hDLE1BQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQXVCLENBQUM7b0JBQ3RELElBQUksS0FBSyxFQUFFO3dCQUNWLE1BQU0sVUFBVSxHQUF1Qjs0QkFDdEMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJOzRCQUNoQixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7NEJBQzlCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTs0QkFDcEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO3lCQUNwQixDQUFDO3dCQUVGLElBQUksVUFBVSxDQUFDLElBQUksSUFBSSxZQUFZLEtBQUssc0JBQVUsQ0FBQyxJQUFJLEVBQUU7NEJBQ3hELFVBQVUsQ0FBQyxJQUFJLEdBQUcsYUFBYSxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7eUJBQ2pEO3dCQUVELElBQUksVUFBVSxDQUFDLFdBQVcsRUFBRTs0QkFDM0IsVUFBVSxDQUFDLFdBQVcsR0FBRyxhQUFhLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQzt5QkFDL0Q7d0JBRUQsSUFBSSxVQUFVLENBQUMsTUFBTSxFQUFFOzRCQUN0QixVQUFVLENBQUMsTUFBTSxHQUFHLGFBQWEsVUFBVSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDO3lCQUNuRTt3QkFFRCxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsVUFBVSxDQUFDO3FCQUNsQztpQkFDRDtnQkFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxhQUFhLENBQUMsQ0FBQzthQUM1RDtZQUVELGVBQWUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFFTSxjQUFjO1lBQ3BCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDbEIsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO2FBQzFCO1FBQ0YsQ0FBQztLQUNEO0lBNURELHFDQTREQyJ9