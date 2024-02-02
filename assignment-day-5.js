function feast(beast, dish) {
    
     let a=beast[0],b=beast[beast.length-1];
      let c=dish[0],d=dish[dish.length-1];
      
      if( a === c&& b=== d)
        return true;
      else
        return false;
    }

    console.log(feast("great blue heron", "garlic naan"));