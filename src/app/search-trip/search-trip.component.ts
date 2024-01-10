import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-trip',
  templateUrl: './search-trip.component.html',
  styleUrls: ['./search-trip.component.css']
})
export class SearchTripComponent implements OnInit {

  searchClicked: boolean = false;
  tripArray = [
    {
      tripHeader: "Mysore",
      tripDetils: "Immerse yourself in the regal charm of Mysore, where majestic palaces, vibrant markets, and a rich cultural tapestry await to unfold a captivating experience."
    },
    {
      tripHeader: "Amritsar",
      tripDetils: "Embark on a soulful journey to Amritsar, where the Golden Temple's serene beauty, vibrant markets, and rich culinary delights promise an unforgettable blend of spirituality and cultural immersion."
    },
    {
      tripHeader: "Ladakh",
      tripDetils: "Discover the breathtaking landscapes and cultural wonders of Ladakh, as you embark on an adventure that transcends ordinary travel and elevates your soul to the mesmerizing heights of the Himalayas."
    },
    {
      tripHeader: "Goa",
      tripDetils: "Experience the perfect blend of sun, sand, and vibrant culture in Goa, where each moment is a celebration of pristine beaches, lively festivals, and an unparalleled zest for life."
    },
    {
      tripHeader: "Delhi",
      tripDetils: "Explore the heart of India in Delhi, where history seamlessly meets modernity, offering a captivating journey through ancient monuments, bustling markets, and the vibrant spirit of the capital city."
    },
    {
      tripHeader: "Ellora & Ajanta Caves",
      tripDetils: "Embark on a mesmerizing journey through time at Ellora and Ajanta Caves, where ancient rock-cut masterpieces narrate the rich tapestry of India's artistic and spiritual heritage in a breathtaking symphony of architecture and artistry."
    },
    {
      tripHeader: "Varanasi",
      tripDetils: "Immerse yourself in the spiritual heartbeat of India in Varanasi, where ancient ghats, mystical rituals, and the serene Ganges River create an unforgettable tapestry of culture and enlightenment."
    },
    {
      tripHeader: "Munnar",
      tripDetils: "Escape to the pristine beauty of Munnar, where lush tea plantations, cascading waterfalls, and panoramic views create the perfect backdrop for an enchanting and rejuvenating getaway."
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  search() {
    this.searchClicked = true;
  }

}