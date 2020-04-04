let lexor = new Map();

lexor.set('World', 'Παγκοσμίος'); // in extreme cases
lexor.set('USA', 'Η.Π.Α / Αμερική');
lexor.set('Spain', 'Ισπανία');
lexor.set('Italy', 'Ιταλία');
lexor.set('France', 'Γαλλία');
lexor.set('Iran', 'Ιράν');
lexor.set('Germany', 'Γερμανία');
lexor.set('UK', 'Ηνωμένο Βασίλειο');
lexor.set('Turkey', 'Τουρκία');
lexor.set('Switzerland', 'Ελβετία');

export function englishToGreek(pushableObject, countryName) {
  pushableObject.push(lexor.get(countryName));
}
