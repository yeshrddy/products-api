class ApiFeatures{
    constructor(query,queryStr){
        this.query=query;
        this.queryStr=queryStr;
    }

    filter(){
        //EXCLUDING FIELDS
        let queryObj={...this.queryStr}
        let excludeFields=['page', 'limit']
        excludeFields.forEach(x=>{
            delete queryObj[x]
        })
        //Filtering
        // let queryString=JSON.stringify(queryObj)
        // queryString=queryString.replace(/\b(gte|lte|lt|gt)\b/g,(match)=>`$${match}`)
        // queryObj=JSON.parse(queryString)
        // console.log(queryObj);
        // this.query=this.query.find(queryObj)
        return this;
    }

    page(){
        const page = this.queryStr.page*1 || 1;
        const limit = this.queryStr.limit*1 || 10;
        const skip=(page - 1)*limit;
        this.query=this.query.skip(skip).limit(limit);
        return this;
    }
}

module.exports=ApiFeatures;