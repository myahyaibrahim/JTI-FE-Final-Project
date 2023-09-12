import React from 'react'

import appLogo from '../images/track_water.png'

import appleStoreBadge from '../images/apple_store_badge.svg'
import googlePlayBadge from '../images/google_play_badge.png'

import coverImage from '../images/amplichat_iphones_two.png'

// endorsement images
import dreamhub_filled from '../images/dreamhub_filled.png'
import voiceqna_filled from '../images/voiceqna_fill_v2_gradient.png'
import voicemirror_filled from '../images/voice_mirror_v_1024.png'
import bazipaipai_unfilled from '../images/bazipaipai_64.png'
import spindrifthome_filled from '../images/sh_unfill_1024.png'


// section images
import guitar from '../images/IBM-Group_4_Final_Project.png'
import event_phones from '../images/All-in-One.jpg'
import foggy_blue from '../images/water-works.jpg'
import purple_phones from '../images/fitur.jpg'
import purple_light from '../images/purple_light.jpg'
import concert_classic from '../images/concert_classic.jpg'

import discordImage from '../images/discord.png'

export const initialState = {
    // when in dev, change appURL to local url
    // appURL: 'http://localhost:3000',  
    // when in production, change appURL to real url
    appURL: 'https://amplichat.com',

    appLogo: appLogo,
    appName: 'Aqua Track',

    coverTitle: 'Stay Connected at Events',
    coverText: 'Chat with other attendees and make new friends at your favorite events and concerts.',
    appleStoreBadge: appleStoreBadge,
    appleStoreLink: 'https://apps.apple.com/us/app/amplichat/id1499570373',
    googlePlayBadge: googlePlayBadge,
    googlePlayLink: 'https://apps.apple.com/us/app/amplichat/id1499570373',

    coverImage: coverImage,

    endorsementTitle: `Hangout with your favorite people on your favorite apps`,
    endorsementText: `AmpliChat powers conversations within DreamHub, VoiceQnA, VoiceMirror, BaZiPaiPai, and SpindriftHome.`,
    endorsementList: [
        {
            title: `DreamHub: Visualized Stories`,
            titleColor: `orangeRed`,
            image: dreamhub_filled,
            URL: `https://dreamhub.app`,
        },
        {
            title: `VoiceQnA: Speak a New Language`,
            titleColor: `forestGreen`,
            image: voiceqna_filled,
            URL: `https://voiceqna.com`,
        },
        {
            title: `VoiceMirror: Travel Translator`,
            titleColor: `blue`,
            image: voicemirror_filled,
            URL: `https://voiceqna.com/mirror`,
        },
        {
            title: `BaZiPaiPai: Know Your Destiny`,
            titleColor: `black`,
            image: bazipaipai_unfilled,
            URL: `https://bazipaipai.com`,
        },
        {
            title: `SpindriftHome: HOA Management`,
            titleColor: `orangeRed`,
            image: spindrifthome_filled,
            URL: `https://spindrifthome.com`,
        },
    ],

    sectionList: [
        {
            'title': `Aqua Track - Water Monitoring System`,
            'text': `Simply put, it's a cost-effective and efficient system designed to monitor the quality of water using IoT (Internet of Things). The data obtained is transferred to the cloud through IoT technology.`,
            'image': guitar,
        },
        {
            'title': `The most convenient water management system ever made`,
            'text': `Say goodbye to the hassle of finding a water monitoring solution that's compatible with your city water meter or fits a specific pipe type and size. The Aqua Track Water Monitoring System is a universal, independent, all-in-one solution that fits all major pipe types and sizes, making it easy for homeowners, property managers, and business owners to save money and conserve resources. `,
            'image': event_phones,
        },
        {
            'title': `How Aqua Track - Water Monitoring System IoT Water Monitoring Works?`,
            'text': `In the Aqua Track - Water Monitoring System remote water monitoring system, the main water meter is monitored continuously and recorded to a server in real-time. The service analyses change in consumption patterns and create the necessary alarms for deviations. Water consumption is reported accurately and possible leaks can be reacted to without delay.`,
            'image': foggy_blue,
        },
        {
            'title': `Use Aqua Track's Real-time Analytics to save water costs`,
            'text': `Energyly industry-leading IoT water monitoring and analytics solutions help industries and hotels to increase productivity.`,
            'image': purple_phones,
        },
        // {
        //     'title': `Discover New Events and Friends`,
        //     'text': `Our app is the perfect way to enhance your experience at events and concerts! Connect with others, share your thoughts and opinions, and discover new artists and events to love.`,
        //     'image': purple_light,
        // },
        // {
        //     'title': `Connect with Concert Fans`,
        //     'text': `Whether you're a seasoned concert-goer or a first-time attendee, our app is the perfect way to connect with others and make the most of your experience. Download now and start chatting!`,
        //     'image': concert_classic,
        // },
    ],

    discordImage: discordImage,
    discordLink: 'https://discord.com/invite/aFQPYyAVDq',
}

const initialContext = {
    state: initialState,
    dispatch: () => null,
}

export const Context = React.createContext(initialContext)
