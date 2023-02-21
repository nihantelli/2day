//Main class that takes parameter.
class VideoService {
  video: IVideo;
  constructor(video: IVideo) {
    this.video = video;
  }
  get(videoSeries: ISeries[]) {
    this.video.getVideo(videoSeries);
  }
}
interface IVideo {
  getVideo(videoSeries: ISeries[]);
}
//Classes that hold Technological materials.
class Laptop implements IVideo {
  getVideo(videoSeries: ISeries[]) {
    videoSeries.forEach((video) =>
      console.log(
        `${video.name} was taken in ${video.location} on ${video.date} and can be watched on Laptop.`
      )
    );
  }
}
class Phone implements IVideo {
  getVideo(videoSeries: ISeries[]) {
    videoSeries.forEach((video) =>
      console.log(
        `${video.name} was taken in ${video.location} on ${video.date} and can be watched on Phone.`
      )
    );
  }
}
class Tablet implements IVideo {
  getVideo(videoSeries: ISeries[]) {
    videoSeries.forEach((video) =>
      console.log(
        `${video.name} was taken in ${video.location} on ${video.date} and can be watched on Tablet.`
      )
    );
  }
}

interface ISeries {
  name: string;
  date: string;
  location: string;
}
//Creating video array
let videoSeries: ISeries[] = [];
//Pushing videos to videoSeries
let video1: ISeries = {
  name: "Video1",
  date: "23 April",
  location: "İstanbul",
};
let video2: ISeries = {
  name: "Video2",
  date: "1 October",
  location: "İstanbul",
};
let video3: ISeries = {
  name: "Video3",
  date: "15 April",
  location: "İzmir",
};
let video4: ISeries = {
  name: "Video4",
  date: "15 January",
  location: "Ankara",
};
let video5: ISeries = {
  name: "Video5",
  date: "21 February",
  location: "İstanbul",
};
videoSeries.push(video1, video2, video3, video4, video5);
//Sending as parameter instead of creating in class to reduce dependency.
let videoLaptop = new VideoService(new Laptop());
videoLaptop.get(videoSeries);
let videoTablet = new VideoService(new Tablet());
videoTablet.get(videoSeries);
let videoPhone = new VideoService(new Phone());
videoPhone.get(videoSeries);
