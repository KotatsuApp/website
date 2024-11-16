import { translators, type Translator } from '../../../website/translators';

export function getTranslator(translator: string): Translator | undefined {
  return translator && Object.prototype.hasOwnProperty.call(translators, translator)
    ? translators[translator]
    : undefined;
}
