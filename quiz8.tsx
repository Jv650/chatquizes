const names = ["alice", "bob", "carol"];

// create a new array where each name starts with a capital letter

const newNames = names.map(name => name.charAt(0).toUpperCase());
// this would return 
//["A", "B", "C"]

// so the correct way to solve this is:
const newNames = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));


/* Explanation:
"alice".slice(1)


returns:

"lice"


Because:

index 0 → "a"

index 1 → "l"

and slice(1) takes "lice" and stops at the end.

Why we use it here:

To capitalize "alice" → "Alice"
we do:

name.charAt(0).toUpperCase()   // "A"
+ name.slice(1)                // "lice"


Together: "A" + "lice" = "Alice"
*/