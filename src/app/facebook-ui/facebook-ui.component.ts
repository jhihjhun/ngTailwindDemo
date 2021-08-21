import { ElementRef, Renderer2 } from '@angular/core';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';

// import Swiper core and required components
import SwiperCore, {
  Navigation
} from "swiper/core";

// install Swiper components
SwiperCore.use([
  Navigation
]);

export interface FBitem {
  itemName: string;
  imgUrl: string;
}

@Component({
  selector: 'app-facebook-ui',
  templateUrl: './facebook-ui.component.html',
  styleUrls: ['./facebook-ui.component.scss']
})
export class FacebookUIComponent implements OnInit {

  panelState = [false, false, false, false];

  leftItems: FBitem[] = [
    {
      itemName: 'Jeeeeed',
      imgUrl: 'https://bruce-fe-fb.web.app/image/avator.png'
    },
    {
      itemName: '活動',
      imgUrl: 'https://bruce-fe-fb.web.app/image/left/activity.svg'
    },
    {
      itemName: '天氣',
      imgUrl: 'https://bruce-fe-fb.web.app/image/left/cloudy.png'
    },
    {
      itemName: '災害應變中心',
      imgUrl: 'https://bruce-fe-fb.web.app/image/left/dynamic.svg'
    },
    {
      itemName: '新冠病毒資訊中心',
      imgUrl: 'https://bruce-fe-fb.web.app/image/left/facemask.svg'
    },
    {
      itemName: '社團',
      imgUrl: 'https://bruce-fe-fb.web.app/image/left/friend.svg'
    },
    {
      itemName: '企業管理平台',
      imgUrl: 'https://bruce-fe-fb.web.app/image/left/job.png'
    },
    {
      itemName: 'Messenger',
      imgUrl: 'https://bruce-fe-fb.web.app/image/left/messenger.svg'
    },
    {
      itemName: '近期廣告動態',
      imgUrl: 'https://bruce-fe-fb.web.app/image/left/pay.png'
    },
    {
      itemName: '朋友名單',
      imgUrl: 'https://bruce-fe-fb.web.app/image/left/sale.png'
    },
    {
      itemName: '最愛',
      imgUrl: 'https://bruce-fe-fb.web.app/image/left/star.svg'
    },
    {
      itemName: 'Marketplace',
      imgUrl: 'https://bruce-fe-fb.web.app/image/left/store.svg'
    },
    {
      itemName: 'Watch',
      imgUrl: 'https://bruce-fe-fb.web.app/image/left/watchingTv.svg'
    }
  ];

  @ViewChildren('limitStoryMask', { read: ElementRef }) limitStoryMask?: QueryList<ElementRef>;
  @ViewChildren('limitStoryImg', { read: ElementRef }) limitStoryImg?: QueryList<ElementRef>;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  public showPopoverPanel(panelIndex: number): void {

    this.panelState.forEach((state, idx) => {

      this.panelState[idx] = false;

      if (panelIndex === idx) {
        this.panelState[panelIndex] = true;
        return;
      }
    });
  }

  public stopPropagationEvent(event: Event) {
    event.stopPropagation();
  }

  public mouseEnterLimitStory(index: number) {
    var mask = this.limitStoryMask?.find(x => x.nativeElement.id === `limitStoryMask${index}`)?.nativeElement;
    var img = this.limitStoryImg?.find(x => x.nativeElement.id === `limitStoryImg${index}`)?.nativeElement;

    this.renderer.removeClass(mask, 'hidden');
    this.renderer.addClass(img, 'scale-105');
  }

  public mouseLeaveLimitStory(index: number) {
    var mask = this.limitStoryMask?.find(x => x.nativeElement.id === `limitStoryMask${index}`)?.nativeElement;
    var img = this.limitStoryImg?.find(x => x.nativeElement.id === `limitStoryImg${index}`)?.nativeElement;

    this.renderer.addClass(mask, 'hidden');
    this.renderer.removeClass(img, 'scale-105');
  }
}
