const mergeTimeslot=(timeslot)=>{
    let start=[],end=[] 
    let nums=[]
    timeslot.sort()
    
    for(let i=0;i<timeslot.length;i++){
      const t=timeslot[i].split(" ")
      nums.push({"start":t[0],"end":t[1]})
    }

    for(let i=0;i<nums.length;i++){
        let id=end.findIndex(x=>x==nums[i].start)
        if(id!=-1){
            end[id]=nums[i].end
        }
        else{
            start.push(nums[i].start)
            end.push(nums[i].end)
        }
    }
    timeslot=[]
    for(let i=0;i<start.length;i++){
      timeslot.push(start[i]+" "+end[i])
    }

    return timeslot;
}

module.exports={
    mergeTimeslot
}