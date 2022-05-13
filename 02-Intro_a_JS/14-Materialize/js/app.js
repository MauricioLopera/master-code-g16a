function PullPush(){
    document.getElementById('1').classList.add('push-s7');
    document.getElementById('3').classList.add('pull-s7');
}

document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.collapsible');
    let options = {
        inDuration:400
    };
    let instances = M.Collapsible.init(elems, options);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    let options = {
        dismissible:false
    };
    var instances = M.Modal.init(elems, options);
  });