# ISO-Lang

Small and lightweight package to get languages in different languages.

Created using data from <https://en.wikiversity.org/wiki/ISO_639-1_language_matrix>

**Number Supported Languages: 95**

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

### Language Object

The language object includes the translations of all supported languages and the native translation as its own key.  
Small example:

```typescript
{
    de: string,
    en: string,
    ...: string,
    native: string
}
```

### getLanguage

Takes in a supported ISOCode (639-1 Standard) and returns the translations for it.

#### Parameters

- isoCode (string) // ISO 639-1 Standard

#### Returns

Language Object

### getLanguagesIn

Takes in a supported ISOCode (639-1 Standard) and returns all supported languages as small objects in translated to this language.

#### Parameters

- isoCode (string)

#### Returns

{ native: string, isoCode: string, name: string }[] // name is the translated name of this language in the requested ISOCode

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT
