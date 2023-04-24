function make_album(artist_name, album_title, track = 0) {
    let album = {
        "Artist": artist_name,
        "Title": album_title,
        "tracks": track
    };
    return album;
}
let newAlbum1 = make_album("Nusrat Fateh Ali Khan", "Shahen shah");
console.log(newAlbum1);
let newAlbum2 = make_album("Mehdi Hassan", "Ab ke hum bichde");
console.log(newAlbum2);
let newAlbum3 = make_album("Tylor swift", "folklore", 9);
console.log(newAlbum3);
export {};
