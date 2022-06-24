

 

 const ThemeColor=()=>{
    let theme ='';
     let matched = true;
     console.log('Iam the theme function inside the NavBar ')
       if(matched) {
        theme = 'dark';
       }
       else{
        theme = 'light';
       }
       return matched , theme;
   };
 
 console.log(ThemeColor());
 