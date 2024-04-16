import React from 'react';

const Article2 = () => {
    // Seu código HTML aqui
    const htmlContent = `<!DOCTYPE  html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="pt" lang="pt"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><title>file_1706246642605</title><meta name="author" content="Thiago Límido Santos"/><style type="text/css"> * {margin:0; padding:0; text-indent:0; }
     h3 { color: #001F5F; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 28pt; }
     h4 { color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 18pt; }
     h1 { color: #FFF; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 36pt; }
     h2 { color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 31pt; }
     .s1 { color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 16pt; }
     .s2 { color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }
     .s3 { color: black; font-family:Cambria, serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 10pt; }
     .s4 { color: black; font-family:Cambria, serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 10pt; }
     .s5 { color: black; font-family:"Calibri Light", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 14pt; }
     .a, a { color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 11pt; }
     .s6 { color: #FFF; font-family:Cambria, serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 11pt; }
     .s7 { color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 11pt; }
     .s8 { color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 11pt; }
     .s9 { color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 11pt; }
     .s10 { color: black; font-family:Arial, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 10pt; }
     .s11 { color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 12pt; }
     .s12 { color: #0462C1; font-family:Calibri, sans-serif; font-style: normal; font-weight: normal; text-decoration: underline; font-size: 11pt; }
     p { color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 11pt; margin:0pt; }
     .s13 { color: black; font-family:Calibri, sans-serif; font-style: italic; font-weight: normal; text-decoration: none; font-size: 11pt; }
     .s14 { color: black; font-family:Cambria, serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 11pt; }
     .s15 { color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 9pt; }
     .s16 { color: #FFF; font-family:Cambria, serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 9pt; }
     .s17 { color: black; font-family:Cambria, serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 9pt; }
     .s18 { color: black; font-family:Cambria, serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 9pt; }
     .s19 { color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 11pt; }
     .s21 { color: #1154CC; font-family:Cambria, serif; font-style: normal; font-weight: normal; text-decoration: underline; font-size: 11pt; }
     .s22 { color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 12pt; }
     li {display: block; }
     #l1 {padding-left: 0pt;counter-reset: c1 1; }
     #l1> li>*:first-child:before {counter-increment: c1; content: counter(c1, decimal)". "; color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 11pt; }
     #l1> li:first-child>*:first-child:before {counter-increment: c1 0;  }
     #l2 {padding-left: 0pt;counter-reset: c2 1; }
     #l2> li>*:first-child:before {counter-increment: c2; content: counter(c2, decimal)") "; color: black; font-family:Calibri, sans-serif; font-style: italic; font-weight: normal; text-decoration: none; font-size: 11pt; }
     #l2> li:first-child>*:first-child:before {counter-increment: c2 0;  }
     #l3 {padding-left: 0pt;counter-reset: d1 17; }
     #l3> li>*:first-child:before {counter-increment: d1; content: counter(d1, decimal)" "; color: black; font-style: normal; font-weight: normal; text-decoration: none; }
     #l3> li:first-child>*:first-child:before {counter-increment: d1 0;  }
     #l4 {padding-left: 0pt;counter-reset: d2 4; }
     #l4> li>*:first-child:before {counter-increment: d2; content: counter(d1, decimal)"."counter(d2, decimal)" "; color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 11pt; }
     #l4> li:first-child>*:first-child:before {counter-increment: d2 0;  }
     #l5 {padding-left: 0pt;counter-reset: c3 1; }
     #l5> li>*:first-child:before {counter-increment: c3; content: counter(c3, decimal)". "; color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 11pt; }
     #l5> li:first-child>*:first-child:before {counter-increment: c3 0;  }
     li {display: block; }
     #l6 {padding-left: 0pt;counter-reset: e1 1; }
     #l6> li>*:first-child:before {counter-increment: e1; content: counter(e1, decimal)" "; color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 9pt; }
     #l6> li:first-child>*:first-child:before {counter-increment: e1 0;  }
     li {display: block; }
     #l7 {padding-left: 0pt; }
     #l7> li>*:first-child:before {content: " "; color: black; font-family:Wingdings; font-style: normal; font-weight: normal; text-decoration: none; font-size: 11pt; }
     table, tbody {vertical-align: top; overflow: visible; }
    `;

    return (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
};

export default Article2;