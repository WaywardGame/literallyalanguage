import { Dictionary, ILanguage, ITranslationArray, ITranslationObject } from "language/ILanguage";
import Language from "language/Language";
import Mod from "mod/Mod";
import Enums from "utilities/enum/Enums";

export default class LiterallyALanguage extends Mod {
	private language: ILanguage | undefined;

	public onInitialize(): void {
		const english = languageManager.getLanguage("English");
		if (!english) {
			return;
		}

		this.language = new Language("Literally a Language");

		const dictionaries = Enums.values(Dictionary);
		for (const dictionaryId of dictionaries) {
			if (dictionaryId === Dictionary.Ui) {
				continue;
			}

			const dictionary = english.getDictionary(dictionaryId);
			const newDictionary: ITranslationArray = {};

			const keys = Object.keys(dictionary);
			for (const key of keys) {
				const index = parseInt(key, 10);
				const value = dictionary[index] as ITranslationObject;
				if (value) {
					const definition: ITranslationObject = {
						name: value.name,
						description: value.description,
						prefix: value.prefix,
						suffix: value.suffix
					};

					if (definition.name && dictionaryId !== Dictionary.Item) {
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

	public onUninitialize(): void {
		if (this.language) {
			languageManager.remove(this.language);
			this.language = undefined;
		}
	}
}
