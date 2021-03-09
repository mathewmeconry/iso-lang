# ISO-Lang

Small and lightweight package to get languages in different languages.

Created using data from <https://en.wikiversity.org/wiki/ISO_639-1_language_matrix>

## Typescript

Includes typings in the package itself

## Usage

Install the lasted version with

`npm install --save iso-lang`

or

`yarn add iso-lang`

Require the module in your code:

```javascript
const ISOLang = require("iso-lang");
```

or

```typescript
import ISOLang from "iso-lang";
```

## Documentation

### getLanguage

Takes in a supported ISOCode and returns the translations for it.

#### Parameters

- isoCode (string)

#### Returns

Language Object

### getLanguagesIn

Takes in a supported ISOCode and returns all supported languages as small objects in translated to this language.

#### Parameters

- isoCode (string)

#### Returns

{ native: string, isoCode: string, name: string }[] // name is the translated name of this language in the requested ISOCode
