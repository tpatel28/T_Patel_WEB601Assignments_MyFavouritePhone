import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from '../content-card/content-card.component';
import { TypeconcluderPipe } from '../typeconcluder.pipe';
import { FormsModule } from '@angular/forms';
import { HoverAffectDirective } from '../hover-affect.directive';
import { CreateContentComponent } from '../create-content/create-content.component';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, TypeconcluderPipe, FormsModule,HoverAffectDirective,CreateContentComponent],
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
        type:"Ios",
        tags: ["Latest", "Amazing"]
      },
      {
        id: 1,
        title: "google pixel 8 pro",
        description:"With Google Pixel 8 Pro and Google Pixel 8 , built with the most advanced Tensor chip , you can create memories with the best Pixel Camera yet. And you can improve video memories with AI-powered features like Audio Magic Eraser to reduce distracting background sounds and Video Boost to improve the visuals, too.",
        creator:"Google",
        imgURL:"data:image/jpeg;base64,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",
        type:"Android",
        tags: ["Old", "Tough"]
      },
      {
        id: 2,
        title: "samsung s23 ultra",
        description:"The Galaxy S23 Ultra has the unique ability to record video in 8k at 30 fps, the newest and most high-quality picture standard available. The S23 Ultra offers improved low-light capture, a wider field of view, and enhanced zoom capabilities.",
        creator:"Samsung Electronics",
        imgURL:"https://images.samsung.com/ca/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-colors-green-back-s.jpg",
        type:"Android",
        tags: ["Andriod", "Latest"]
      },
      {
        id: 3,
        title: "Xiaomi 13T",
        description:"Xiaomi 13T is a flagship smartphone released in 2023, featuring a 6.67-inch AMOLED display, a Mediatek Dimensity 8200 Ultra chipset, a triple camera with 50 MP",
        creator:"Xiaomi pvt",
        imgURL:"https://m.media-amazon.com/images/I/41OYmPwWS-L._AC_UF894,1000_QL80_.jpg",
        type:"",
        tags: ["cheap", ""]
      },
      {
        id: 4,
        title: "Galaxy S24 Ultra",
        description:"The Galaxy S24 Ultra has the unique ability to record video in 8k at 30 fps, the newest and most high-quality picture standard available. The S23 Ultra offers improved low-light capture, a wider field of view, and enhanced zoom capabilities.",
        creator:"Samsung Electronics",
        imgURL:"https://images.samsung.com/is/image/samsung/p6pim/ca/2307/gallery/ca-galaxy-z-fold5-f946-sm-f946wlbexac-537222664?$650_519_PNG$",
        type:"Android",
        tags: ["Bold", "fav"]
      },
      {
        id: 5,
        title: "iPhone SE",
        description:"A15 Bionic enhances nearly everything you do. Apps load in a flash and feel so fluid. The offers improved low-light capture, a wider field of view, and enhanced zoom capabilities.",
        creator:"Samsung Electronics",
        imgURL:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-purple_AV1_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=1661027419893",
        type:"Ios",
        tags: ["small", "Best"]
      },
      {
        id: 6,
        title: "Google pixel",
        description:"The Google Pixel is a smartphone that was tested with the Android 7.1 operating system. This model weighs 5 ounces, has a 5 inch touch screen display, 12.3-megapixel main camera, and 8-megapixel selfie camera. It comes with 4GB of RAM. It was tested with 32GB of storage. Google Pixel.",
        creator:"Google",
        imgURL:"https://media.wired.com/photos/652db3f0b44e9598aea19183/1:1/w_1775,h_1775,c_limit/Best-Pixel-Phones-Gear.jpg",
        type:"Android",
        tags: ["Nice", "camera"]
      }
     ];
  }
  onContentCreated(newContent: any) {
    this.contentItems.push({ ...newContent }); 
  }
}
