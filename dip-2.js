//Main class that takes parameter.
var VideoService = /** @class */ (function () {
    function VideoService(video) {
        this.video = video;
    }
    VideoService.prototype.get = function (videoSeries) {
        this.video.getVideo(videoSeries);
    };
    return VideoService;
}());
//Classes that hold Technological materials.
var Laptop = /** @class */ (function () {
    function Laptop() {
    }
    Laptop.prototype.getVideo = function (videoSeries) {
        videoSeries.forEach(function (video) {
            return console.log("".concat(video.name, " was taken in ").concat(video.location, " on ").concat(video.date, " and can be watched on Laptop."));
        });
    };
    return Laptop;
}());
var Phone = /** @class */ (function () {
    function Phone() {
    }
    Phone.prototype.getVideo = function (videoSeries) {
        videoSeries.forEach(function (video) {
            return console.log("".concat(video.name, " was taken in ").concat(video.location, " on ").concat(video.date, " and can be watched on Phone."));
        });
    };
    return Phone;
}());
var Tablet = /** @class */ (function () {
    function Tablet() {
    }
    Tablet.prototype.getVideo = function (videoSeries) {
        videoSeries.forEach(function (video) {
            return console.log("".concat(video.name, " was taken in ").concat(video.location, " on ").concat(video.date, " and can be watched on Tablet."));
        });
    };
    return Tablet;
}());
//Creating video array
var videoSeries = [];
//Pushing videos to videoSeries
var video1 = {
    name: "Video1",
    date: "23 April",
    location: "İstanbul"
};
var video2 = {
    name: "Video2",
    date: "1 October",
    location: "İstanbul"
};
var video3 = {
    name: "Video3",
    date: "15 April",
    location: "İzmir"
};
var video4 = {
    name: "Video4",
    date: "15 January",
    location: "Ankara"
};
var video5 = {
    name: "Video5",
    date: "21 February",
    location: "İstanbul"
};
videoSeries.push(video1, video2, video3, video4, video5);
//Sending as parameter instead of creating in class to reduce dependency.
var videoLaptop = new VideoService(new Laptop());
videoLaptop.get(videoSeries);
var videoTablet = new VideoService(new Tablet());
videoTablet.get(videoSeries);
var videoPhone = new VideoService(new Phone());
videoPhone.get(videoSeries);
