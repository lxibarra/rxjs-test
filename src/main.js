import Rx from 'rxjs/Rx';


const searchWikiPedia = (term) => {
      return fetch(`/w/api.php?action=opensearch&format=json&search=${term}`)
              .then(response=>response.json())
}

var input = Rx.Observable.fromEvent(document.getElementById('input1'), 'input');
       input
      .filter(event=>event.target.value.length >= 3)
      .map(event=>event.target.value)
      .debounceTime(500)
      .switchMap(searchWikiPedia)
      .subscribe(result=>{
          console.log(result);
          document.getElementById('searchTerm').innerHTML = result[0];
          document.getElementById('list1').innerHTML = '';
          document.getElementById('list1').innerHTML = result[1].map(item=>`<li>${item}</li>`);
      });


//input.subscribe(value=> console.log('do some other stuff'));
