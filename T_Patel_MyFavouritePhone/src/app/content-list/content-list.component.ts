import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from '../content-card/content-card.component';
import { TypeconcluderPipe } from '../typeconcluder.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, TypeconcluderPipe, FormsModule],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  DisplayContentInformation(contentItem: Content) {
    console.log(`ID: ${contentItem.id} and Title: ${contentItem.title}`);
    }
  @Input () contentItems: Content[] = [];

  searchTitle: string = '';
  contentExists: boolean = false;
  message: string = '';  
  selectedTitle: string | null = null;

  checkContentExists() {
    const foundItem = this.contentItems.find(item => item.title.toLowerCase() === this.searchTitle.toLowerCase());
    this.contentExists = !!foundItem;
    this.message = foundItem ? 'Content item exists.' : 'Content item does not exist.';
    this.selectedTitle = foundItem ? foundItem.title : null;
  }
  ngOnInit(): void {
    this.contentItems =[
      {
        id: 0,
        title: "iphone 15 pro max",
        description:"Apple's iPhone 15 Pro Max is absolutely the biggest, meanest, best iPhone you can buy right now. It's the only iPhone to have the new 5x telephoto camera, and it packs a processor that will actually be running console-grade games.",
        creator:"Apple Inc.",
        imgURL:"https://rukminim1.flixcart.com/image/400/400/xif0q/cases-covers/back-cover/p/t/k/iphone-14-pro-max-logo-cut-microfiber-case-vonzee-original-imagr2hzedjemwyk.jpeg?q=70",
        type:"Ios"
      },
      {
        id: 1,
        title: "google pixel 8 pro",
        description:"With Google Pixel 8 Pro and Google Pixel 8 , built with the most advanced Tensor chip , you can create memories with the best Pixel Camera yet. And you can improve video memories with AI-powered features like Audio Magic Eraser to reduce distracting background sounds and Video Boost to improve the visuals, too.",
        creator:"Google",
        imgURL:"data:image/jpeg;base64,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",
        type:"Android"
      },
      {
        id: 2,
        title: "samsung s23 ultra",
        description:"The Galaxy S23 Ultra has the unique ability to record video in 8k at 30 fps, the newest and most high-quality picture standard available. The S23 Ultra offers improved low-light capture, a wider field of view, and enhanced zoom capabilities.",
        creator:"Samsung Electronics",
        imgURL:"https://images.samsung.com/ca/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-colors-green-back-s.jpg",
        type:"Android"
      },
      {
        id: 3,
        title: "Xiaomi 13T",
        description:"Xiaomi 13T is a flagship smartphone released in 2023, featuring a 6.67-inch AMOLED display, a Mediatek Dimensity 8200 Ultra chipset, a triple camera with 50 MP",
        creator:"Xiaomi pvt",
        imgURL:"https://m.media-amazon.com/images/I/41OYmPwWS-L._AC_UF894,1000_QL80_.jpg",
        type:""
      },
      {
        id: 4,
        title: "Galaxy S24 Ultra",
        description:"The Galaxy S24 Ultra has the unique ability to record video in 8k at 30 fps, the newest and most high-quality picture standard available. The S23 Ultra offers improved low-light capture, a wider field of view, and enhanced zoom capabilities.",
        creator:"Samsung Electronics",
        imgURL:"https://images.samsung.com/is/image/samsung/p6pim/ca/2307/gallery/ca-galaxy-z-fold5-f946-sm-f946wlbexac-537222664?$650_519_PNG$",
        type:"Android"
      },
      {
        id: 5,
        title: "iPhone SE",
        description:"A15 Bionic enhances nearly everything you do. Apps load in a flash and feel so fluid. The offers improved low-light capture, a wider field of view, and enhanced zoom capabilities.",
        creator:"Samsung Electronics",
        imgURL:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-purple_AV1_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=1661027419893",
        type:"Ios"
      },
      {
        id: 6,
        title: "Google pixel",
        description:"The Google Pixel is a smartphone that was tested with the Android 7.1 operating system. This model weighs 5 ounces, has a 5 inch touch screen display, 12.3-megapixel main camera, and 8-megapixel selfie camera. It comes with 4GB of RAM. It was tested with 32GB of storage. Google Pixel.",
        creator:"Google",
        imgURL:"https://media.wired.com/photos/652db3f0b44e9598aea19183/1:1/w_1775,h_1775,c_limit/Best-Pixel-Phones-Gear.jpg",
        type:"Android"
      }
     ];
  }
}
