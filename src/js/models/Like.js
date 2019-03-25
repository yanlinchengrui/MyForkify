export default class Like {

    constructor(){
        this.likes = [];
    }

    addLike(id, title, author, img){
        const like = {id, title, author, img};
        this.likes.push(like);
        this.storeData();
        return like;
    }

    deleteLike(id) {
        const i = this.likes.findIndex(e => e.id === id);
        this.likes.splice(i, 1);
        this.storeData();
    }

    isLiked(id) {
        return this.likes.findIndex(e => id === e.id) !== -1;
    }

    getLikeNum(){
        return this.likes.length;
    }

    storeData() {
        localStorage.setItem('likes', JSON.stringify(this.likes));
    }

    retrieveData() {
        const storeData = JSON.parse(localStorage.getItem('likes'));
        if(storeData) this.likes = storeData;
    }
    
}