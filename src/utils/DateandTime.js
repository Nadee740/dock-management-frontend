const addMinutesToTime=(time, minsAdd)=> {
    function z(n){ return (n<10? '0':'') + n;};
    var bits = time.split(':');
    var mins = bits[0]*60 + +bits[1] + +minsAdd;
    return z(mins%(24*60)/60 | 0) + ':' + z(mins%60);
  }

  module.exports={
    addMinutesToTime
  }