import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function LanguageSetter(txtBr, txtEn, txtEs) {
  const router = useRouter();
  const { locale } = router;

  const languages = {
    pt: txtBr,
    en: txtEn,
    es: txtEs,
  };

  const defineLanguage = (location) => languages[location];
  const [TextContent, setTextContent] = useState(defineLanguage(locale));

  useEffect(() => {
    setTextContent(defineLanguage(locale));
  }, [locale]);

  return TextContent;
}

export default LanguageSetter;
