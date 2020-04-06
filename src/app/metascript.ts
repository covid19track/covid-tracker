const lexor = new Map();

lexor.set('World', 'Παγκοσμίος'); // in extreme cases
lexor.set('USA', 'Η.Π.Α');
lexor.set('Spain', 'Ισπανία');
lexor.set('Italy', 'Ιταλία');
lexor.set('France', 'Γαλλία');
lexor.set('Iran', 'Ιράν');
lexor.set('Germany', 'Γερμανία');
lexor.set('UK', 'Βρετανία');
lexor.set('Turkey', 'Τουρκία');
lexor.set('Switzerland', 'Ελβετία');
lexor.set('Netherlands', 'Ολλανδία');
lexor.set('Canada', 'Καναδάς');
lexor.set('Belgium', 'Βέλγιο');
lexor.set('Austria', 'Αυστρία');
lexor.set('Portugal', 'Πορτογαλία');
lexor.set('Brazil', 'Βέλγιο');
lexor.set('S. Korea', 'Ν. Κορέα');
lexor.set('Israel', 'Ισραήλ');
lexor.set('Sweden', 'Σουηδία');
lexor.set('Norway', 'Νορβηγία');
lexor.set('Australia', 'Αυστραλία');
lexor.set('Russia', 'Ρωσία');
lexor.set('Czechia', 'Τσεχία');
lexor.set('Chile', 'Χιλή');
lexor.set('Denmark', 'Δανία');
lexor.set('Poland', 'Πολωνία');
lexor.set('Romania', 'Ρουμανία');
lexor.set('Malaysia', 'Μαλαισία');
lexor.set('Ecuador', 'Ισημερινός');
lexor.set('Phillipines', 'Φιλιππίνες');
lexor.set('India', 'Ινδία');
lexor.set('Japan', 'Ιαπωνία');
lexor.set('Pakistan', 'Πακιστάν');
lexor.set('Luxembourg', 'Λουξεμβούργο');
lexor.set('Saudi Arabia', 'Σ. Αραβία');
lexor.set('Indonesia', 'Ινδονησία');
lexor.set('Thailand', 'Ταιλάνδη');
lexor.set('Finland', 'Φινλανδία');
lexor.set('Peru', 'Περού');
lexor.set('Mexico', 'Μεξικό');
lexor.set('Greece', 'Ελλάδα');
lexor.set('Panama', 'Παναμάς');
lexor.set('Serbia', 'Σερβία');
lexor.set('South Africa', 'Νότια Αφρική');
lexor.set('UAE', 'Η.Α.Ε.');
lexor.set('Dominican Republic', 'Αγ. Δομίνικος');
lexor.set('Iceland', 'Ισλανδία');
lexor.set('Colombia', 'Κολομβία');
lexor.set('Argentina', 'Αργεντινή');
lexor.set('Qatar', 'Κατάρ');
lexor.set('Algeria', 'Αλγερία');
lexor.set('Ukraine', 'Ουκρανία');
lexor.set('Singapore', 'Σιγκαπούρη');
lexor.set('Croatia', 'Κροατία');
lexor.set('Egypt', 'Αίγυπτος');
lexor.set('Estonia', 'Εσθονία');
lexor.set('Slovenia', 'Σλοβενία');
lexor.set('New Zealand', 'Νέα Ζηλανδία');
lexor.set('Morocco', 'Μορόκο');
lexor.set('Iraq', 'Ιράκ');
lexor.set('Hong Kong', 'Χονγκ Κόνγκ');
lexor.set('Lithuania', 'Λιθουανία');
lexor.set('Armenia', 'Αρμενία');
lexor.set('Moldova', 'Μολδοβία');
lexor.set('Diamond Princess', '*Πλοίο D.P.');
lexor.set('Bahrain', 'Μπαχρέιν');
lexor.set('Hungary', 'Ουγκαρία');
lexor.set('Bosnia', 'Βοζνία');
lexor.set('Hungary', 'Ουγγαρία');
lexor.set('Cameroon', 'Καμερούν');
lexor.set('Tunisia', 'Τυνισία');
lexor.set('Kazakhstan', 'Καζακστάν');
lexor.set('Azerbaijan', 'Αζερμπαιτζάν');
lexor.set('Lebanon', 'Λίβανος');
lexor.set('Latvia', 'Λετονία');
lexor.set('Bulgaria', 'Βουλγαρία');
lexor.set('Macedonia', 'Σκόπια');
lexor.set('Kuwait', 'Κουβέιτ');
lexor.set('Slovakia', 'Σλοβακία');
lexor.set('Andorra', 'Ανδόρρα');
lexor.set('Belarus', 'Λευκορωσία');
lexor.set('Costa Rica', 'Κόστα Ρίκα');
lexor.set('Cyprus', 'Κύπρος');
lexor.set('Uruguay', 'Ουρουγουάη');
lexor.set('Taiwan', 'Ταϊβάν');

function englishToGreek(pushableObject, countryName) {
  pushableObject.push(lexor.get(countryName));
}

function singleObject(arr) {
  let rv = {};
  for (let i = 0; i < arr.length; i++) {
    rv[i] = arr[i];
  }
}

function toObject(arr1, arr2, arr3) {
  return [singleObject(arr1), singleObject(arr2), singleObject(arr3)];
}

export { lexor, englishToGreek, toObject, singleObject };