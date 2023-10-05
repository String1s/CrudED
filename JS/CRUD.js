export class CRUD{


    #tableName = null;
    #data = null;

    constructor(tableName){

this.#setTableName(tableName);
this.#setData();

}
   #setTableName(tableName){
this.#tableNameValidate(tableName);
this.#tableName = tableName;

}

 #setData(){
    let dataRepository = this.#get(this.#tableName);
    this.#data = dataRepository === null ? [] : dataRepository
 }
 #tableNameValidate(tableName){
    if(tableName == undefined)
    throw new Error("Table name requerid");
 }

 #save(){
    let dataToSave = JSON.stringify(this.#data);
    sessionStorage.setItem(this.#tableName, dataToSave);
 }

 #get(key){
    let data = sessionStorage.getItem(key);
    return JSON.parse(data);
 }

 #existElementWithIds(id) {
    return this.data[id] === undefined ? false : true;
 }

 #checkThatElementsExistsWithId(id) {
    
    if(!this.#existElementWithIds(id))

    throw new Error("The element does not exist")

 }


 create(data){
    this.#data.push(data);
    this.#save();
    return this.#data.length;
 }

 read(id){
    this.#checkThatElementsExistsWithId(id);
    return this.#data[id];
 }

 readall(){
    return this.#data;
 }

 update(id, data){
    this.#checkThatElementsExistsWithId(id);
    this.#data[id] = data;
    this.save();
    return true;
 }

 delete(id){
    this.#checkThatElementsExistsWithId(id)
    this.#data.splice(id, 1);
    this.#save();
    return true;
 }

}