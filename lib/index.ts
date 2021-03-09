import * as allLanguages from './data/all_languages.json'

export type Language = typeof allLanguages.ab
export type LanguagesIn = {
    native: string,
    isoCode: string,
    name: string
}

export default class ISOLang {
    /**
     * Returns a language or undefined if not found
     *
     * @static
     * @param {keyof typeof allLanguages} isoCode
     * @returns {(Language | undefined)}
     * @memberof ISOLang
     */
    public static getLanguage(isoCode: keyof typeof allLanguages): Language | undefined {
        if (allLanguages.hasOwnProperty(isoCode)) {
            return allLanguages[isoCode] as Language
        }
        return undefined
    }

    /**
     * Returns all languages in the given language with native name
     * Format: [{ native: string, isoCode: string, name: string }]
     *
     * @static
     * @param {keyof typeof allLanguages} isoCode
     * @returns {LanguagesIn[]}
     * @memberof ISOLang
     */
    public static getLanguagesIn(isoCode: keyof typeof allLanguages): LanguagesIn[] {
        if (!allLanguages.hasOwnProperty(isoCode)) {
            return []
        }

        const languages: LanguagesIn[] = []
        for (const language of Object.keys(allLanguages) as Array<keyof typeof allLanguages>) {
            if ((language as string) !== 'default') {
                if (allLanguages.hasOwnProperty(language)) {
                    const currentLanguage = allLanguages[language] as Language
                    if (currentLanguage.hasOwnProperty(isoCode)) {
                        languages.push({
                            isoCode: language,
                            native: currentLanguage.native || '',
                            name: currentLanguage[isoCode as keyof Language] || ''
                        })
                    }
                }
            }
        }

        return languages
    }
}