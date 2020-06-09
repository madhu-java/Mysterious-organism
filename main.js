// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory= (num, dnaBase) => {
return{
  specimenNum:num,
  dna:dnaBase,
  mutate(){
    const copyDna = this.dna;
    let newBase=[]; 
    do{
  newBase =returnRandBase();
    }while(copyDna[0] ===newBase[0] );
      this.dna[0]=newBase;
    },
    compareDNA(obj){
     const newSpecimenDna =obj.dna;
     let count = 0
        for(let i=0;i<15;i++){
          if(this.dna[i] === newSpecimenDna[i])
           count++;
        }
        console.log(` specimen ${this.specimenNum} and ${obj.specimenNum} have ${((count/15)*100) . toFixed(2)} % DNA in common`);
    },
     willLikelySurvive(){
      let count=0;
      this.dna.forEach(ele =>{
       if( ele==='C' || ele ==='G'){
         count++;
       }

      }); 
      return ((count/15)*100 >= 60)
    }

    }
  };

//testing 

/*const alienzero = pAequorFactory(1,mockUpStrand());
const alienOne = pAequorFactory(5,mockUpStrand());
const alienROne = pAequorFactory(7,mockUpStrand());
const alienHOne = pAequorFactory(9,mockUpStrand());
console.log(alienzero.specimenNum);
console.log(alienzero.dna);
alienzero.mutate();
console.log(alienzero.dna);
console.log(alienOne.dna);
alienOne.compareDNA(alienzero);

console.log(alienzero.willLikelySurvive());
console.log(alienOne.willLikelySurvive());
console.log(alienROne.willLikelySurvive());
console.log(alienHOne.willLikelySurvive());
console.log(alienHOne);*/
console.log('----------------------------------------');
// create 30 instances of pAequor that can survive in their natural environment. Store these instances in an array for your team to study later.

let surviveInstances=[];
for(let i=0;surviveInstances.length<30;i++){
  let newInstance=pAequorFactory(i,mockUpStrand());
  console.log(newInstance);
  console.log(newInstance.willLikelySurvive());
  if(newInstance.willLikelySurvive()){
surviveInstances.push(newInstance);
console.log('added')
  }
}

console.log(surviveInstances);
surviveInstances.forEach(ele=> {
  console.log(ele.willLikelySurvive());
});
