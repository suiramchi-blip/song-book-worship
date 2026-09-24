import React, { useEffect, useMemo, useRef, useState } from "react";
import kingdomKidsLogo from "./Image.png"

type ViewMode = "lyrics" | "both";
type SectionType =
| "chorus"
| "prechorus"
| "verse"
| "bridge"
| "tag"
| "other";

type Song = {
  id: number;
  title: string;
  key: string;
  lyrics: string;
  chords: string;
  youtube?: string;
};

const songsData: Song[] = [
  {
    id: 1,
    title: "1. Goodness of God",
    key: "F",
    youtube:"",
    lyrics: `
1.
I love You Lord
Oh Your mercy never fails me
All my days
I’ve been held in Your hands
From the moment that I wake up
Until I lay my head
I will sing of the goodness of God

Chorus
All my life You have been faithful
All my life
You have been so so good
With every breath
That I am able
I will sing of the goodness of God

2.
I love Your voice
You have led me through the fire
In darkest nights
You are close like no other
I’ve known You as a Father
I’ve known You as a friend
I have lived in the goodness of God

Chorus
All my life You have been faithful
All my life
You have been so so good
With every breath
That I am able
I will sing of the goodness of God

Bridge
Your goodness is running after
It’s running after me
Your goodness is running after
It’s running after me
With my life laid down
I’m surrendered now
I give You everything
Your goodness is running after
It’s running after me

Chorus
All my life You have been faithful
All my life
You have been so so good
With every breath
That I am able
I will sing of the goodness of God

Tag
Oh I'm gonna sing
Of the goodness of God
`,
    chords: ``,
  },
  {
    id: 2,
    title: "2. Gratitude",
    key: "F",
    youtube:"",
    lyrics: `
1.
All my words fall short
I got nothing new
How could I express
All my gratitude

2.
I could sing these songs
As I often do
But every song must end
And You never do

Chorus 1
So I throw up my hands
And praise You again and again
‘Cause all that I have
Is a hallelujah hallelujah

Chorus 2
And I know it’s not much
But I’ve nothing else fit for a king
Except for a heart singing
Hallelujah hallelujah

3.
I’ve got one response
I’ve got just one move
With my arms stretched wide
I will worship You

Chorus 1
So I throw up my hands
And praise You again and again
‘Cause all that I have
Is a hallelujah hallelujah

Chorus 2
And I know it’s not much
But I’ve nothing else fit for a king
Except for a heart singing
Hallelujah hallelujah

Bridge
Come on my soul
Oh don’t you get shy on me
Lift up your song
‘Cause you’ve got a lion
Inside of those lungs
Get up and praise the Lord

Chorus 1
So I throw up my hands
And praise You again and again
‘Cause all that I have
Is a hallelujah hallelujah

Chorus 2
And I know it’s not much
But I’ve nothing else fit for a king
Except for a heart singing
Hallelujah hallelujah                                 
`,
    chords: `                                 
`,
  },
  {
    id: 3,
    title: "3. Holy Forever",
    key: "F",
    youtube: "",
    lyrics: `
1.
A thousand generations
Falling down in worship
To sing the song of
Ages to the Lamb
And all who've gone before us
And all who will believe
Will sing the song of
Ages to the Lamb

Pre Chorus 1
Your name is the highest
Your name is the greatest
Your name stands above them all

Pre Chorus 2
All thrones and dominions
All powers and positions
Your name stands above them all

Chorus 1
And the angels cry holy
All creation cries holy
You are lifted high holy
Holy forever

2.
If you've been forgiven
And if you've been redeemed
Sing the song
Forever to the Lamb
If you walk in freedom
And if you bear His name
Sing the song
Forever to the Lamb

Tag
We'll sing the song
Forever and amen

Chorus 1
And the angels cry holy
All creation cries holy
You are lifted high holy
Holy forever

Chorus 2
Hear your people sing holy
To the King of Kings holy
You will always be holy
Holy forever

Pre Chorus 1
Your name is the highest
Your name is the greatest
Your name stands above them all

Pre Chorus 2
All thrones and dominions
All powers and positions
Your name stands above them all

Pre Chorus 1
Your name is the highest
Your name is the greatest
Your name stands above them all

Pre Chorus 2
All thrones and dominions
All powers and positions
Your name stands above them all

Chorus 1
And the angels cry holy
All creation cries holy
You are lifted high holy
Holy forever

Chorus 2
Hear your people sing holy
To the King of Kings holy
You will always be holy
Holy forever

Tag
You will always be Holy
Holy forever  
`,
    chords: `  
`,
  },
  {
    id: 4,
    title: "4. Great Are You Lord",
    key: "G",
    youtube: "",
    lyrics: `
Verse 1
You give life You are love
You bring light to the darkness
You give hope You restore
Every heart that is broken
Pre Chorus
Great are You Lord
Chorus
It's Your breath in our lungs
So we pour out our praise
We pour out our praise
It's Your breath in our lungs
So we pour out our praise to You only
Verse 2
You give life You are love
You bring light to the darkness
You give hope You restore
Every heart that is broken
Pre Chorus
Great are You Lord
Chorus
It's Your breath in our lungs
So we pour out our praise
We pour out our praise
It's Your breath in our lungs
So we pour out our praise to You only
Bridge
All the earth will shout Your praise
Our hearts will cry these bones will sing
Great are You Lord
Chorus
It's Your breath in our lungs
So we pour out our praise
We pour out our praise
It's Your breath in our lungs
So we pour out our praise to You only
`,
    chords: `
`,
  },
  {
    id: 5,
    title: "5. Build My Life",
    key: "C",
    youtube: "",
    lyrics: `
Verse 1
Worthy of every song
We could ever sing
Worthy of all the praise
We could ever bring
Worthy of every breath
We could ever breath
We live for You
We live for You
Verse 2
Jesus the Name
Above every other name
Jesus the only One
Who could ever save
Worthy of every breath
We could ever breathe
We live for You
Oh we live for You
Chorus
Holy there is no one like You
There is none beside You
Open up my eyes in wonder
And show me who You are
And fill me with Your heart
And lead me in Your love
To those around me
Verse 2
Jesus the Name
Above every other name
Jesus the only One
Who could ever save
Worthy of every breath
We could ever breathe
We live for You
Oh we live for You
Chorus
Holy there is no one like You
There is none beside You
Open up my eyes in wonder
And show me who You are
And fill me with Your heart
And lead me in Your love
To those around me
Bridge
And I will build my life upon Your love
It is a firm foundation
And I will put my trust in You alone
And I will not be shaken
Chorus
Holy there is no one like You
There is none beside You
Open up my eyes in wonder
And show me who You are
And fill me with Your heart
And lead me in Your love
To those around me
`,
    chords: `
`,
  },
  {
    id: 6,
    title: "6. What a Beautiful Name",
    key: "Bb",
    youtube: "",
    lyrics: `
Verse 1
You were the Word at the beginning
One With God the Lord Most High
Your hidden glory in creation
Now revealed in You our Christ
Chorus
What a beautiful Name it is
What a beautiful Name it is
The Name of Jesus Christ my King
What a beautiful Name it is
Nothing compares to this
What a beautiful Name it is
The Name of Jesus
Verse 2
You didn't want Heaven without us
So Jesus You brought Heaven down
My sin was great
Your love was greater
What could separate us now
Chorus
What a wonderful Name it is
What a wonderful Name it is
The Name of Jesus Christ my King
What a wonderful Name it is
Nothing compares to this
What a wonderful Name it is
The Name of Jesus
Tag
What a wonderful Name it is
The Name of Jesus
Bridge
Death could not hold You
The veil tore before You
You silence the boast of sin and grave
Bridge
The heavens are roaring
The praise of Your glory
For You are raised to life again
Bridge
You have no rival You have no equal
Now and forever God You reign
Bridge
Yours is the kingdom Yours is the glory
Yours is the Name above all Names
Chorus
What a powerful Name it is
What a powerful Name it is
The Name of Jesus Christ my King
What a powerful Name it is
Nothing can stand against
What a powerful Name it is
The Name of Jesus
Bridge
You have no rival You have no equal
Now and forever God You reign
Bridge
Yours is the kingdom Yours is the glory
Yours is the Name above all Names
Chorus
What a powerful Name it is
What a powerful Name it is
The Name of Jesus Christ my King
What a powerful Name it is
Nothing can stand against
What a powerful Name it is
The Name of Jesus
Tag
What a powerful Name it is
The Name of Jesus
`,
    chords: `
`,
  },
  {
    id: 7,
    title: "7. Living Hope",
    key: "G",
    youtube: "",
    lyrics: `
Verse 1
How great the chasm
That lay between us
How high the mountain
I could not climb
In desperation I turned to Heaven
And spoke Your name into the night
Pre Chorus 1
Then through the darkness
Your loving kindness
Tore through the shadows of my soul
The work is finished
The end is written
Jesus Christ my living hope
Verse 2
Who could Imagine
So great a mercy
What heart could fathom
Such boundless grace
The God of ages
Stepped down from glory
To wear my sin
And bear my shame
Pre Chorus 2
The cross has spoken I am forgiven
The King of kings calls me His own
Beautiful Savior I'm Yours forever
Jesus Christ my living hope
Chorus
Hallelujah
Praise the One who set me free
Hallelujah
Death has lost its grip on me
You have broken every chain
There's salvation in Your name
Jesus Christ my living hope
Verse 3
Then came the morning
That sealed the promise
Your buried body began to breathe
Out of the silence the Roaring Lion
Declared the grave
Has no claim on me
Tag
Jesus Yours is the victory
Chorus
Hallelujah
Praise the One who set me free
Hallelujah
Death has lost its grip on me
You have broken every chain
There's salvation in Your name
Jesus Christ my living hope
Tag
Jesus Christ my living hope
Chorus
Hallelujah
Praise the One who set me free
Hallelujah
Death has lost its grip on me
You have broken every chain
There's salvation in Your name
Jesus Christ my living hope
Tag
Jesus Christ my living hope
`,
    chords: `
`,
  },
 {
    id: 8,
    title: "8. King of Kings",
    key: "C",
    youtube: "",
    lyrics: `
Verse 1
In the darkness we were waiting
Without hope without light
Till from Heaven You came running
There was mercy in Your eyes
To fulfill the law and prophets
To a virgin came the word
From a throne of endless glory
To a cradle in the dirt
Chorus
Praise the Father praise the Son
Praise the Spirit three in one
God of glory majesty
Praise forever to the King of Kings
Verse 2
To reveal the Kingdom coming
And to reconcile the lost
To redeem the whole creation
You did not despise the Cross
For even in Your suffering
You saw to the other side
Knowing this was our salvation
Jesus for our sake You died
Chorus
Praise the Father praise the Son
Praise the Spirit three in one
God of glory majesty
Praise forever to the King of Kings
Verse 3
And the morning that You rose
All of Heaven held its breath
Till that stone was moved for good
For the Lamb had conquered death
And the dead rose from their tombs
And the angels stood in awe
For the souls of all who'd come
To the Father are restored
Verse 4
And the church of Christ was born
Then the Spirit lit the flame
Now this gospel truth of old
Shall not kneel shall not faint
By His blood and in His name
In His freedom I am free
For the love of Jesus Christ
Who has resurrected me
Chorus
Praise the Father praise the Son
Praise the Spirit three in one
God of glory majesty
Praise forever to the King of Kings
Tag
Praise forever to the King of Kings
`,
    chords: ` 
`,
  },
  {
  id: 9,
  title: "9. House of the Lord",
  key: "G",
  youtube: "",
  lyrics: `
Verse 1
We worship the God who was
We worship the God who is
We worship the God who
Evermore will be
Verse 2
He opened the prison doors
He parted the raging sea
My God He holds the victory
Chorus
There’s joy in the house of the Lord
There’s joy in the house
Of the Lord today
And we won’t be quiet
We shout out Your praise
There’s Joy in the house of the Lord
Our God is surely in this place
And we won’t be quiet
We shout out Your praise
Turnaround
We shout out
Your praise
Verse 3
We sing to the God who heals
We sing to the God who saves
We sing to the God who always
Makes a way
Verse 4
'Cause He hung upon that Cross
Then He rose up from that grave
My God’s still rolling stones away
Chorus
There’s joy in the house of the Lord
There’s joy in the house
Of the Lord today
And we won’t be quiet
We shout out Your praise
There’s Joy in the house of the Lord
Our God is surely in this place
And we won’t be quiet
We shout out Your praise
Bridge
We were the beggars
Now we’re royalty
We were the prisoners
Now we’re running free
We are forgiven accepted
Redeemed by His grace
Let the house of the Lord sing praise
Chorus
There’s joy in the house of the Lord
There’s joy in the house of the Lord today
And we won’t be quiet
We shout out Your praise
There’s Joy in the house of the Lord
Our God is surely in this place
And we won’t be quiet
We shout out Your praise
Chorus
There’s joy in the house of the Lord
There’s joy in the house
Of the Lord today
And we won’t be quiet
We shout out Your praise
There’s Joy in the house of the Lord
Our God is surely in this place
And we won’t be quiet
We shout out Your praise
Instrumental
We shout out
Your praise
Instrumental
We shout out
Your praise
We shout out Your praise
`,
  chords: `
`,
},
  {
  id: 10,
  title: "10. Lord, I Need You",
  key: "G",
  youtube: "",
  lyrics: `
Verse 1
Lord I come I confess
Bowing here I find my rest
Without You I fall apart
You're the one that guides my heart
Chorus
Lord I need You oh I need You
Every hour I need You
My one defense my righteousness
Oh God how I need You
Verse 2
Where sin runs deep
Your grace is more
Where grace is found
Is where You are
And where You are
Lord I am free
Holiness is Christ in me
Chorus
Lord I need You oh I need You
Every hour I need You
My one defense my righteousness
Oh God how I need You
Bridge
Teach my song to rise to You
When temptation comes my way
Bridge
When I cannot stand I'll fall on You
Jesus You're my hope
And stay
Chorus
Lord I need You oh I need You
Every hour I need You
My one defense my righteousness
Oh God how I need You
Tag
My one defense my righteousness
Oh God how I need You
`,
  chords: `
`,
},
 {
  id: 11,
  title: "11. 10,000 Reasons",
  key: "G",
  youtube: "",
  lyrics: `
Chorus
Bless the Lord O my soul
O my soul
Worship His Holy name
Sing like never before
O my soul
I'll worship Your Holy name
Verse 1
The sun comes up
It's a new day dawning
It's time to sing Your song again
Whatever may pass
And whatever lies before me
Let me be singing
When the evening comes
Chorus
Bless the Lord O my soul
O my soul
Worship His Holy name
Sing like never before
O my soul
I'll worship Your Holy name
Verse 2
You're rich in love
And You're slow to anger
Your name is great
And Your heart is kind
For all Your goodness
I will keep on singing
Ten thousand reasons
For my heart to find
Chorus
Bless the Lord O my soul
O my soul
Worship His Holy name
Sing like never before
O my soul
I'll worship Your Holy name
Verse 3
And on that day
When my strength is failing
The end draws near
And my time has come
Still my soul will
Sing Your praise unending
Ten thousand years
And then forevermore
Chorus
Bless the Lord O my soul
O my soul
Worship His Holy name
Sing like never before
O my soul
I'll worship Your Holy name
Tag
I'll worship Your Holy name
Tag
Sing like never before
O my soul
I'll worship Your Holy name
Tag
I'll worship Your Holy name
`,
  chords: `
`,
},
{
  id: 12,
  title: "12. This Is Amazing Grace",
  key: "G",
  youtube: "",
  lyrics: `
Verse 1
Who breaks the power
Of sin and darkness
Whose love is mighty
And so much stronger
The King of Glory
The King above all kings
Who shakes the whole Earth
With holy thunder
Who leaves us breathless
In awe and wonder
The King of Glory
The King above all kings
Chorus
This is amazing grace
This is unfailing love
That You would take my place
That You would bear my cross
You laid down Your life
That I would be set free
Oh Jesus I sing for
All that You've done for me
Verse 2
Who brings our chaos
Back into order
Who makes the orphan
A son and daughter
The King of Glory
The King of Glory
Who rules the nations
With truth and justice
Shines like the sun in
All of its brilliance
The King of Glory
The King above all kings
Chorus
This is amazing grace
This is unfailing love
That You would take my place
That You would bear my cross
You laid down Your life
That I would be set free
Oh Jesus I sing for
All that You've done for me
Bridge
Worthy is the Lamb
Who was slain
Worthy is the King
Who conquered the grave
Worthy is the Lamb
Who was slain
Worthy is the King
Who conquered the grave
Bridge
Worthy is the Lamb
Who was slain
Worthy is the King
Who conquered the grave
Worthy is the Lamb
Who was slain
Worthy worthy worthy
Chorus
This is amazing grace
This is unfailing love
That You would take my place
That You would bear my cross
You laid down Your life
That I would be set free
Oh Jesus I sing for
All that You've done for me
`,
  chords: `
`,
},
{
  id: 13,
  title: "13. Way Maker",
  key: "C",
  youtube: "",
  lyrics: `
  Verse 1
You are here
Moving in our midst
I worship You
I worship You
You are here
Working in this place
I worship You
I worship You
Chorus
You are way maker miracle worker
Promise keeper
Light in the darkness my God
That is who You are
You are way maker miracle worker
Promise keeper
Light in the darkness my God
That is who You are
Verse 2
You are here
Touching every heart
I worship You
I worship You
You are here
Healing every heart
I worship You
I worship You
Verse 3
You are here
Turning lives around
I worship You
I worship You
You are here
Mending every heart
I worship You
I worship You
Chorus
You are way maker miracle worker
Promise keeper
Light in the darkness my God
That is who You are
You are way maker miracle worker
Promise keeper
Light in the darkness my God
That is who You are
Refrain
That is who You are
That is who You are
That is who You are
That is who You are
Chorus
You are way maker miracle worker
Promise keeper
Light in the darkness my God
That is who You are
You are way maker miracle worker
Promise keeper
Light in the darkness my God
That is who You are
Bridge
Even when I don't see it
You're working
Even when I don't feel it
You're working
You never stop
You never stop working
You never stop
You never stop working
Chorus
You are way maker miracle worker
Promise keeper
Light in the darkness my God
That is who You are
You are way maker miracle worker
Promise keeper
Light in the darkness my God
That is who You are
Refrain
That is who You are
That is who You are
That is who You are
That is who You are
Chorus
You are way maker miracle worker
Promise keeper
Light in the darkness my God
That is who You are
You are way maker miracle worker
Promise keeper
Light in the darkness my God
That is who You are
Refrain
That is who You are
That is who You are
That is who You are
That is who You are
`,
  chords: `
`,
},
{
  id: 14,
  title: "14. Praise The Lord Forever",
  key: "G",
  youtube: "",
  lyrics: `Verse 1
Oh let all that is within me
Bless His holy name
For His love endures forever
And His mercies new today
We will enter with thanksgiving
And fill His courts with praise
Come on Church
Lift your voice and sing
Chorus
Praise the Lord
Praise the Lord
Praise the Lord forever
Bless His name
Let all within me sing
Praise the Lord forever
Verse 2
If your life’s been resurrected
By the war that Jesus won
If you wait in expectation
For a Kingdom yet to come
All you citizens of Heaven
Sons and daughters of the King
Come on church
Lift your voice and sing
Chorus
Praise the Lord
Praise the Lord
Praise the Lord forever
Bless His name
Let all within me sing
Praise the Lord forever
Verse 3
For the One who’s brokenhearted
And it’s hard to sing this song
You’ve been walking through
The valley and your faith
Is feeling small
I pray peace and love surround you
From the God who understands
As the family all around you
Lifts your arms up when you can’t
Verse 4
Join the choir of creation
With the song of the redeemed
Come on Church
Lift your voice and sing
Chorus
Praise the Lord
Praise the Lord
Praise the Lord forever
Bless His name
Let all within me sing
Praise the Lord forever
Tag
Praise the Lord forever
Chorus
Praise the Lord
Praise the Lord
Praise the Lord forever
Bless His name
Let all within me sing
Praise the Lord forever
`,
  chords: `  
`,
},
{
  id: 15,
  title: "15. Center",
  key: "G",
  youtube: "",
  lyrics: `Verse 1
Maybe we’ve made this complicated
More than it was ever meant to be
Hasn’t it always been about the same thing
Lord bring us back to simple things
Chorus
You be the center of it all
My heart belongs to You
My Savior all in all
You’re the One I hold onto
For the beauty of Your name
My soul will live to say
Jesus I love You
Verse 2
Teach us to discern the moment
When to serve and when to sit here at Your feet
Keep us awake to what’s important
Just like Mary chose the better thing
Chorus
You are the center of it all
My heart belongs to You
My Savior all in all
You’re the One I hold onto
For the beauty of Your name
My soul will live to say
Jesus I love You
Refrain
Oh how I love You
Oh how I love You
Jesus I love You
Bridge
And my whole life for Your glory
My whole world for You only
Everything for the honor of Your name
And if my days tell a story
Let it be of You only
Everything for the honor of Your name
Refrain
Oh how I love You
Oh how I love You
Jesus I love You
Refrain
Oh how I love You
Oh how I love You
Bridge
And my whole life for Your glory
My whole world for You only
Everything for the honor of Your name
And if my days tell a story
Let it be of You only
Everything for the honor of Your name
Refrain
Oh how I love You
Oh how I love You
Jesus I love You
Chorus
You are the center of it all
My heart belongs to You
My Savior all in all
You’re the One I hold onto
For the beauty of Your name
My soul will live to say
Jesus I love You
Tag
My soul will choose to say
Jesus I love You
Tag
My soul will live to say
Jesus I love You
`,
  chords: `
`,
},
{
  id: 16,
  title: "16. Shout to the Lord",
  key: "G",
  youtube: "",
  lyrics: `Verse 1
My Jesus my Savior
Lord there is none like You
All of my days I want to praise
The wonders of Your mighty love
Verse 2
My comfort my shelter
Tower of refuge and strength
Let every breath all that I am
Never cease to worship You
Chorus 1
Shout to the Lord all the Earth
Let us sing
Power and majesty praise
To the King
Mountains bow down
And the seas will roar
At the sound of Your name
Chorus 2
I sing for joy at the work
Of Your hands
Forever I'll love You
Forever I'll stand
Nothing compares to the
Promise I have in You
Verse 1
My Jesus my Savior
Lord there is none like You
All of my days I want to praise
The wonders of Your mighty love
Verse 2
My comfort my shelter
Tower of refuge and strength
Let every breath all that I am
Never cease to worship You
Chorus 1
Shout to the Lord all the Earth
Let us sing
Power and majesty praise
To the King
Mountains bow down
And the seas will roar
At the sound of Your name
Chorus 2
I sing for joy at the work
Of Your hands
Forever I'll love You
Forever I'll stand
Nothing compares to the
Promise I have in You
Tag
Nothing compares to the
Promise I have
Tag
Nothing compares to the
Promise I have in You 
`,
  chords: `
`,
},
{
  id: 17,
  title: "17. Cornerstone",
  key: "C",
  youtube: "",
  lyrics: `Verse 1
My hope is built on nothing less
Than Jesus' blood and righteousness
I dare not trust the sweetest frame
But wholly trust in Jesus' name
Chorus
Christ alone Cornerstone
Weak made strong in the Savior's love
Through the storm He is Lord
Lord of all
Verse 3
When darkness seems to hide His face
I rest on His unchanging grace
In every high and stormy gale
My anchor holds within the veil
My anchor holds within the veil
Chorus
Christ alone Cornerstone
Weak made strong in the Savior's love
Through the storm He is Lord
Lord of all
Refrain
He is Lord
Lord of all
Chorus
Christ alone Cornerstone
Weak made strong in the Savior's love
Through the storm He is Lord
Lord of all
Verse 4
When he shall come with trumpet sound
Oh may I then in Him be found
Dressed in His righteousness alone
Faultless stand before the throne
Chorus
Christ alone Cornerstone
Weak made strong in the Savior's love
Through the storm He is Lord
Lord of all
`,
  chords: ` 
`,
},
{
  id: 18 ,
  title: "18. Oceans",
  key: "C",
  youtube: "",
  lyrics: `Verse 1
You call me out upon the waters
The great unknown where feet may fail
And there I find You in the mystery
In oceans deep my faith will stand
Chorus
I will call upon Your Name
And keep my eyes above the waves
When oceans rise
My soul will rest in Your embrace
For I am Yours and You are mine
Verse 2
Your grace abounds in deepest waters
Your sovereign hand will be my guide
Where feet may fail
And fear surrounds me
You've never failed
And You won't start now
Chorus
I will call upon Your Name
And keep my eyes above the waves
When oceans rise
My soul will rest in Your embrace
For I am Yours and You are mine
Bridge
Spirit lead me
Where my trust is without borders
Let me walk upon the waters
Wherever You would call me
Take me deeper
Than my feet could ever wander
And my faith will be made stronger
In the presence of my Savior
Chorus
I will call upon Your Name
And keep my eyes above the waves
My soul will rest in Your embrace
For I am Yours and You are mine
`,
  chords: `
`,
},
{
  id: 19,
  title: "19. Mighty to Save",
  key: "G",
  youtube: "",
  lyrics: `Verse 1
Everyone needs compassion
A love that's never failing
Let mercy fall on me
Everyone needs forgiveness
The kindness of a Savior
The hope of nations
Chorus
Savior He can move the mountains
My God is mighty to save
He is mighty to save
Forever Author of salvation
He rose and conquered the grave
Jesus conquered the grave
Verse 2
So take me as You find me
All my fears and failures
Fill my life again
I give my life to follow
Everything I believe in
And now I surrender
Chorus
Savior He can move the mountains
My God is mighty to save
He is mighty to save
Forever Author of salvation
He rose and conquered the grave
Jesus conquered the grave
Bridge
Shine your light and
Let the whole world see
We're singin'
For the glory of the risen King
Jesus
Bridge
Shine your light and
Let the whole world see
We're singin'
For the glory of the risen King
Chorus
Savior He can move the mountains
My God is mighty to save
He is mighty to save
Forever Author of salvation
He rose and conquered the grave
Jesus conquered the grave
Bridge
Shine your light and
Let the whole world see
We're singin'
For the glory of the risen King
Jesus
Bridge
Shine your light and
Let the whole world see
We're singin'
For the glory of the risen King Jesus
Bridge
Shine your light and
Let the whole world see
We're singin'
For the glory of the risen King
Jesus
Bridge
Shine your light and
Let the whole world see
We're singin'
For the glory of the risen King
`,
  chords: `
`,
},
{
  id: 20,
  title: "20. O Praise the Name",
  key: "C",
  youtube: "",
  lyrics: `Verse 1
I cast my mind to Calvary
Where Jesus bled and died for me
I see His wounds His hands His feet
My Savior on that cursed tree
Verse 2
His body bound and drenched in tears
They laid Him down in Joseph's tomb
The entrance sealed by heavy stone
Messiah still and all alone
Chorus
O praise the Name of the Lord our God
O praise His Name forevermore
For endless days we will sing Your praise
Oh Lord oh Lord our God
Verse 3
Then on the third at break of dawn
The Son of Heaven rose again
O trampled death where is your sting
The angels roar for Christ the King
Chorus
O praise the Name of the Lord our God
O praise His Name forevermore
For endless days we will sing Your praise
Oh Lord oh Lord our God
Verse 4
He shall return in robes of white
The blazing sun shall pierce the night
And I will rise among the saints
My gaze transfixed on Jesus' face
Chorus
O praise the Name of the Lord our God
O praise His Name forevermore
For endless days we will sing Your praise
Oh Lord oh Lord our God
Tag
Oh Lord oh Lord our God
`,
  chords: `
`,
},
{
  id: 21,
  title: "21. Hosanna",
  key: "G",
  youtube: "",
  lyrics: `Verse 1
I see the King of Glory
Coming on the clouds with fire
The whole Earth shakes
The whole Earth shakes
Verse 2
I see His love and mercy
Washing over all our sin
The people sing
The people sing
Chorus
Hosanna Hosanna
Hosanna in the highest
Hosanna Hosanna
Hosanna in the highest
Verse 3
I see a generation
Rising up to take their place
With selfless faith
With selfless faith
Verse 4
I see a near revival
Stirring as we pray and seek
We're on our knees
We're on our knees
Chorus
Hosanna Hosanna
Hosanna in the highest
Hosanna Hosanna
Hosanna in the highest
Bridge
Heal my heart and make it clean
Open up my eyes to the things unseen
Show me how to love
Like You have loved me
Bridge
Break my heart for what breaks Yours
Everything I am for Your Kingdom's cause
As I walk from Earth into eternity
Chorus
Hosanna Hosanna
Hosanna in the highest
Hosanna Hosanna
Hosanna in the highest
Tag
Hosanna in the highest
`,
  chords: `
`,
},
{
  id: 22,
  title: "22. Here I Am to Worship",
  key: "D",
  youtube: "",
  lyrics: `Verse 1
Light of the world
You stepped down into darkness
Opened my eyes let me see
Beauty that made this heart adore You
Hope of a life spent with You
Chorus
Here I am to worship
Here I am to bow down
Here I am to say that You're my God
You're altogether lovely
Altogether worthy
Altogether wonderful to me
Verse 2
King of all days
Oh so highly exalted
Glorious in Heaven above
Humbly You came
To the Earth You created
All for love's sake became poor
Chorus
Here I am to worship
Here I am to bow down
Here I am to say that You're my God
You're altogether lovely
Altogether worthy
Altogether wonderful to me
Bridge
I'll never know how much it cost
To see my sin upon that cross
Chorus
Here I am to worship
Here I am to bow down
Here I am to say that You're my God
You're altogether lovely
Altogether worthy
Altogether wonderful to me
`,
  chords: `
`,
},
{
  id: 23,
  title: "23. The Heart of Worship",
  key: "D",
  youtube: "",
  lyrics: `Verse 1
When the music fades
All is stripped away
And I simply come
Longin' just to bring
Something that's of worth
That will bless Your heart
Pre Chorus
I'll bring You more than a song
For a song in itself
Is not what You have required
You search much deeper within
Through the ways things appear
You're looking into my heart
Chorus
I'm comin' back to the heart of worship
And it's all about You
It's all about You Jesus
I'm sorry Lord
For the thing I've made it
When it's all about You
It's all about You Jesus
Verse 2
King of endless worth
No one could express
How much You deserve
Though I'm weak and poor
All I have is Yours
Every single breath
Pre Chorus
I'll bring You more than a song
For a song in itself
Is not what You have required
You search much deeper within
Through the ways things appear
You're looking into my heart
Chorus
I'm comin' back to the heart of worship
And it's all about You
It's all about You Jesus
I'm sorry Lord
For the thing I've made it
When it's all about You
It's all about You Jesus
Refrain
I'm comin' back to the heart
I'm comin' back to Your heart
Pre Chorus
I'll bring You more than a song
For a song in itself
Is not what You have required
You search much deeper within
Through the ways things appear
You're looking into my heart
Chorus
I'm comin' back to the heart of worship
And it's all about You
It's all about You Jesus
I'm sorry Lord
For the thing I've made it
When it's all about You
It's all about You
Tag
When it's all about You
It's all about You Jesus
`,
  chords: `
`,
},  
{
  id: 24,
  title: "24. Open the Eyes of My Heart",
  key: "D",
  youtube: "",
  lyrics: `Verse
Open the eyes of my heart Lord
Open the eyes of my heart
I want to see You
I want to see You
Open the eyes of my heart Lord
Open the eyes of my heart
I want to see You
I want to see You
Chorus
To see You high and lifted up
Shining in the light of Your glory
Pour out Your power and love
As we sing holy holy holy
Verse
Open the eyes of my heart Lord
Open the eyes of my heart
I want to see You
I want to see You
Open the eyes of my heart Lord
Open the eyes of my heart
I want to see You
I want to see You
Chorus
To see You high and lifted up
Shining in the light of Your glory
Pour out Your power and love
As we sing holy holy holy
Bridge 1
Holy holy holy
Holy holy holy
Holy holy holy
I want to see You
Bridge 2
Worthy worthy worthy
Worthy worthy worthy
Worthy worthy worthy
I want to see You
Bridge 1
Holy holy holy
Holy holy holy
Holy holy holy
I want to see You
Tag
I want to see You
I want to see You
`,
  chords: `
`,
},
{
  id: 25,
  title: "25. Lord, I Lift Your Name on High",
  key: "G",
  youtube: "",
  lyrics: `Verse
Lord I lift Your name on high
Lord I love to sing Your praises
I'm so glad You're in my life
I'm so glad You came to save us
Chorus
You came from Heaven to Earth
To show the way
From the Earth to the cross
My debt You payed
From the cross to the grave
From the grave to the sky
Lord I lift Your name on high
Verse
Lord I lift Your name on high
Lord I love to sing Your praises
I'm so glad You're in my life
I'm so glad You came to save us
Chorus
You came from Heaven to Earth
To show the way
From the Earth to the cross
My debt You payed
From the cross to the grave
From the grave to the sky
Lord I lift Your name on high
Tag
Lord I lift Your name on high
Verse
Lord I lift Your name on high
Lord I love to sing Your praises
I'm so glad You're in my life
I'm so glad You came to save us
Chorus
You came from Heaven to Earth
To show the way
From the Earth to the cross
My debt You payed
From the cross to the grave
From the grave to the sky
Lord I lift Your name on high
Refrain
Lord I lift Your name on high
Refrain
Lord I lift Your name on high
Lord I lift Your name on high
Chorus
You came from Heaven to Earth
To show the way
From the Earth to the cross
My debt You payed
From the cross to the grave
From the grave to the sky
Lord I lift Your name on high
Outro
Lord I lift Your name on high
Lord I lift Your name on high
`,
  chords: `
`,
},
{
  id: 26,
  title: "26. Above All",
  key: "C",
  youtube: "",
  lyrics: `Verse 1
Above all powers above all kings
Above all nature and all created things
Above all wisdom and all the ways of man
You were here before the world began
Verse 2
Above all kingdoms above all thrones
Above all wonders the world has ever known
Above all wealth and treasures of the Earth
There's no way to measure what You're worth
Chorus
Crucified laid behind a stone
You lived to die rejected and alone
Like a rose trampled on the ground
You took the fall and thought of me
Above all
Verse 1
Above all powers above all kings
Above all nature and all created things
Above all wisdom and all the ways of man
You were here before the world began
Verse 2
Above all kingdoms above all thrones
Above all wonders the world has ever known
Above all wealth and treasures of the Earth
There's no way to measure what You're worth
Chorus
Crucified laid behind a stone
You lived to die rejected and alone
Like a rose trampled on the ground
You took the fall and thought of me
Above all
Tag
Like a rose trampled on the ground
You took the fall and thought of me
Breakdown
Above all
`,
  chords: `
`,
},
{
  id: 27,
  title: "27. As The Deer",
  key: "D",
  youtube: "",
  lyrics: `Verse 1
As the deer panteth for the water
So my soul longeth after Thee
You alone are my heart's desire
And I long to worship Thee
Chorus
You alone are my strength my shield
To You alone may my spirit yield
You alone are my heart's desire
And I long to worship You
Verse 2
You're my friend
And You are my brother
Even though
You are a King
I love You more than any other
So much more than anything
Chorus
You alone are my strength my shield
To You alone may my spirit yield
You alone are my heart's desire
And I long to worship You
Tag
Oh I long to worship You
`,
  chords: `
`,
},  
{
  id: 28,
  title: "28. Draw Me Close",
  key: "D",
  youtube: "",
  lyrics: `Verse 1
Draw me close to You
Never let me go
I lay it all down again
To hear You say that I’m Your friend
Verse 2
You are my desire
No one else will do
Cause nothing else could take Your place
To feel the warmth of Your embrace
Pre Chorus
Help me find the way
Bring me back to You
Chorus
You’re all I want
You’re all I’ve ever needed
You’re all I want
Help me know You are here
Verse 3
Draw me close to You
Never let me go
Cause nothing else could take Your place
To feel the warmth of Your embrace
Pre Chorus
Help me find the way
Bring me back to You
Chorus
You’re all I want
You’re all I’ve ever needed
You’re all I want
Help me know You are here
Refrain
You're all that I want
You're all that I need
You are everything to me
Chorus
You’re all I want
You’re all I’ve ever needed
You’re all I want
Help me know You are near
`,
  chords: `
`,
},
{
  id: 29,
  title: "29. God of Wonders",
  key: "C",
  youtube: "",
  lyrics: `Verse 1
Lord of all creation
Of water Earth and sky
The heavens are Your tabernacle
Glory to the Lord on high
Chorus 1
God of wonders beyond our galaxy
You are holy holy
The universe declares Your majesty
You are holy holy
Lord of Heaven and Earth
Lord of Heaven and Earth
Verse 2
Early in the morning
I will celebrate the light
When I stumble in the darkness
I will call Your name by night
Chorus 1
God of wonders beyond our galaxy
You are holy holy
The universe declares Your majesty
You are holy holy
Lord of Heaven and Earth
Lord of Heaven and Earth
Refrain
Hallelujah
To the Lord of Heaven and Earth
Hallelujah
To the Lord of Heaven and Earth
Hallelujah
To the Lord of Heaven and Earth
Chorus 2
God of wonders beyond our galaxy
You are holy holy
Precious Lord reveal Yourself to me
Father holy holy
The universe declares Your majesty
You are holy holy
Tag
Holy holy
Refrain
Hallelujah
To the Lord of Heaven and Earth
Hallelujah
To the Lord of Heaven and Earth
Hallelujah
To the Lord of Heaven and Earth
`,
  chords: `
`,
},
{
  id: 30,
  title: "30. Amazing grace",
  key: "F",
  youtube: "https://youtu.be/Tvt6E9N7AQw?si=H6m4kXWUBkUJZ7g4",
  lyrics: `1.
Amazing grace how sweet the sound
That saved a wretch like me
I once was lost, but now I'm found
Was blind but now I see.


2.
'Twas grace that taught my heart to fear
And grace my fears relieved
How precious did that grace appear
The hour I first believed.

3.
Through many dangers, toils, and snares
I have already come
This grace that brought me safe thus far
And grace will lead me home.

4.
When we've been here ten thousand years
Bright, shining as the sun
We've no less days to sing God's praise
Than when we first begun.
`,
  chords: `
1.
  F                 Bb        F
Amazing grace how sweet the sound
      Dm       G         C
That saved a wretch like me
   F                 Bb        F
I once was lost, but now I'm found
      Dm       C     F
Was blind but now I see.


2.
'Twas grace that taught my heart to fear
And grace my fears relieved
How precious did that grace appear
The hour I first believed.

3.
Through many dangers, toils, and snares
I have already come
This grace that brought me safe thus far
And grace will lead me home.

4.
When we've been here ten thousand years
Bright, shining as the sun
We've no less days to sing God's praise
Than when we first begun.
`,
},
{
  id: 31,
  title: "31. There is one Gospel",
  key: "C",
  youtube: "https://youtu.be/nmBcTrDu4O4?si=5TJ8Q8J1kvSr4ajI",
  lyrics: `1.
There is one Gospel on which I stand, For all eternity
It is my story, my Father’s plan, The Son has rescued me
Oh what a Gospel, Oh what a peace
My highest joy and my deepest need
Now and forever He is my light
I stand in the Gospel of Jesus Christ

2.
There is one Gospel to which I cling, All else I count as loss
For there, where justice and mercy meet
He saved me on the cross
No more I boast in what I can bring
No more I carry the weight of sin
For He has brought me from death to life
I stand in the Gospel of Jesus Christ

3.
There is one Gospel where hope is found 
The empty tomb still speaks
For death could not keep my Saviour down  
He lives and I am free
Now on my Saviour, I fix my eyes
My life is His and His hope is mine!
For He has promised I, too, will rise
I stand in the Gospel of Jesus Christ

4.
And in this Gospel the church is one 
We do not walk alone
We have His Spirit as we press on  
To lead us safely home
And when in glory still I will sing
Of this old story that rescued me
Praise to my Saviour, the King of life
I stand in the Gospel of Jesus Christ  
`,
  chords: `
1.
       C                 F                 C        G
There is one Gospel on which I stand, For all eternity
   C/E              F                  C       G      C
It is my story, my Father’s plan, The Son has rescued me
C                      F     C
Oh what a Gospel, Oh what a peace
F           C          Am      G
My highest joy and my deepest need
C         Dm7     C/E     F
Now and forever He is my light
    F           C         G       C
I stand in the Gospel of Jesus Christ

2.
There is one Gospel to which I cling, All else I count as loss
For there, where justice and mercy meet
He saved me on the cross
No more I boast in what I can bring
No more I carry the weight of sin
For He has brought me from death to life
I stand in the Gospel of Jesus Christ

3.
There is one Gospel where hope is found 
The empty tomb still speaks
For death could not keep my Saviour down  
He lives and I am free
Now on my Saviour, I fix my eyes
My life is His and His hope is mine!
For He has promised I, too, will rise
I stand in the Gospel of Jesus Christ

4.
And in this Gospel the church is one 
We do not walk alone
We have His Spirit as we press on  
To lead us safely home
And when in glory still I will sing
Of this old story that rescued me
Praise to my Saviour, the King of life
I stand in the Gospel of Jesus Christ  
`,
},
{
  id: 32,
  title: "32. Christ our hope in life and death",
  key: "E",
  youtube: "https://youtu.be/FvwlwL1FUEg?si=t7zvlLIV6KHf2TFj",
  lyrics: `1.
What is our hope in life and death?
Christ alone, Christ alone
What is our only confidence?
That our souls to Him belong
Who holds our days within His hand?
What comes, apart from His command?
And what will keep us to the end?
The love of Christ, in which we stand

R:
O sing hallelujah!
Our hope springs eternal
O sing hallelujah!
Now and ever we confess
Christ our hope in life and death

2.
What truth can calm the troubled soul?
God is good, God is good
Where is his grace and goodness known?
In our great Redeemer's blood
Who holds our faith when fears arise?
Who stands above the stormy trial?
Who sends the waves that bring us nigh?
Unto the shore, the rock of Christ

3.
Unto the grave, what shall we sing?
"Christ, he lives! Christ, he lives!"
And what reward will heaven bring?
Everlasting life with him
There we will rise to meet the Lord
Then sin and death will be destroyed
And we will feast in endless joy
When Christ is ours forevermore. 

`,
  chords: `
1.
             E      Esus       E
What is our hope in life and death?
Esus     E      C#m7   B
Christ alone, Christ alone
            E     B     C#m
What is our only confidence?
A         E        B     E
That our souls to Him belong
              G#m             C#m
Who holds our days within His hand?
             F#m7       E      A
What comes, apart from His command?
               E       B     C#m
And what will keep us to the end?
     A         E         B       E  Esus E
The love of Christ, in which we stand

R:  
  C#m   A    E
O sing hallelujah!
     B            C#m
Our hope springs eternal
E   A        E
O sing hallelujah!
A       E     B     A
Now and ever we confess
           C#m      B        E
Christ our hope in life and death

2.
What truth can calm the troubled soul?
God is good, God is good
Where is his grace and goodness known?
In our great Redeemer's blood
Who holds our faith when fears arise?
Who stands above the stormy trial?
Who sends the waves that bring us nigh?
Unto the shore, the rock of Christ

3.
Unto the grave, what shall we sing?
"Christ, he lives! Christ, he lives!"
And what reward will heaven bring?
Everlasting life with him
There we will rise to meet the Lord
Then sin and death will be destroyed
And we will feast in endless joy
When Christ is ours forevermore. 
`,
},
{
    id: 33,
    title: "33. In Christ Alone",
    key: "G",
    youtube: "",
    lyrics: `
Verse 1
In Christ alone my hope is found
He is my light my strength my song
This cornerstone
This solid ground
Firm through the fiercest
Drought and storm
Chorus
What heights of love
What depths of peace
When fears are stilled
When strivings cease
My comforter my All in All
Here in the love of Christ I stand
Verse 2
In Christ alone who took on flesh
Fullness of God in helpless babe
This gift of love
And righteousness
Scorned by the ones
He came to save
Chorus
'Til on that cross
As Jesus died
The wrath of God was satisfied
For every sin on Him was laid
Here in the death of Christ I live
Verse 3
There in the ground His body lay
Light of the world by darkness slain
Then bursting forth in glorious Day
Up from the grave He rose again
Chorus
And as He stands in victory
Sin's curse has lost its grip on me
For I am His and He is mine
Bought with the precious blood of Christ
Verse 4
No guilt in life no fear in death
This is the power of Christ in me
From life's first cry to final breath
Jesus commands my destiny
Chorus
No power of hell
No scheme of man
Can ever pluck me from His hand
Till He returns or calls me home
Here in the power of Christ I'll stand
`,
    chords: `
`,
  },
{
    id: 34,
    title: "34. Yet Not I But Through Christ In Me",
    key: "G",
    youtube: "",
    lyrics: `
Verse 1
What gift of grace
Is Jesus my redeemer
There is no more
For Heaven now to give
He is my joy
My righteousness and freedom
My steadfast love
My deep and boundless peace
Chorus 1
To this I hold
My hope is only Jesus
For my life
Is wholly bound to His
Oh how strange and divine
I can sing all is mine
Yet not I but through Christ in me
Verse 2
The night is dark
But I am not forsaken
For by my side
The Saviour He will stay
I labour on
In weakness and rejoicing
For in my need
His power is displayed
Chorus 2
To this I hold my Shepherd
Will defend me
Through the deepest valley
He will lead
Oh the night has been won
And I shall overcome
Yet not I but through Christ in me
Verse 3
No fate I dread
I know I am forgiven
The future sure
The price it has been paid
For Jesus bled
And suffered for my pardon
And He was raised
To overthrow the grave
Chorus 3
To this I hold
My sin has been defeated
Jesus now
And ever is my plea
Oh the chains are released
I can sing I am free
Yet not I but through Christ in me
Verse 4
With every breath
I long to follow Jesus
For He has said that
He will bring me home
And day by day I know
He will renew me
Until I stand with
Joy before the throne
Chorus 4
To this I hold
My hope is only Jesus
All the glory
Evermore to Him
When the race is complete
Still my lips shall repeat
Yet not I but through Christ in me
Tag
When the race is complete
Still my lips shall repeat
Yet not I but through Christ in me
Tag
Yet not I but through Christ in me
`,
    chords: `
`,
  },
{
    id: 35,
    title: "35. Be Thou My Vision",
    key: "D",
    youtube: "",
    lyrics: `
Verse 1
Be Thou my vision
O Lord of my heart
Naught be all else to me
Save that Thou art
Thou my best thought
By day and by night
Waking or sleeping
Thy presence my light
Verse 2
Be Thou my wisdom
And Thou my true word
I ever with Thee
Qnd Thou with me Lord
Thou my great Father
I Thy true Son
Thou in me dwelling
And I with Thee one
Verse 3
Be Thou my battle
Shield sword for the fight
Be Thou my Dignity
Thou my Delight
Thou my soul's shelter
Thou my high tower
Raise Thou me heavenward
O power of my power
Verse 4
Riches I heed not
Nor man's empty praise
Thou mine inheritance
now and always
Thou and Thou only
first in my heart
High King of Heaven
My treasure Thou art
Verse 5
High King of Heaven
My victory won
May I reach Heaven's joys
O bright Heaven's Sun
Heart of my own heart
Whatever befall
Still be my Vision
O Ruler of all
Tag
Still be my Vision
O Ruler of all
`,
    chords: `
`,
  },
{
    id: 36,
    title: "36. Turn Your Eyes Upon Jesus",
    key: "D",
    youtube: "",
    lyrics: `
Verse 1
O soul are you weary
And troubled
No light in the darkness you see
There's light for a look
At the Savior
And life more abundant and free
Verse 2
Through death into life everlasting
He passed
And we follow Him there
O'er us sin no more hath dominion
For more than conquerors we are
Chorus
Turn your eyes upon Jesus
Look full in His wonderful face
And the things of earth
Will grow strangely dim
In the light of His glory and grace
Verse 3
His Word shall not fail you He promised
Believe Him and all will be well
Then go to a world that is dying
His perfect salvation to tell
Chorus
Turn your eyes upon Jesus
Look full in His wonderful face
And the things of earth
Will grow strangely dim
In the light of His glory
Bridge
Amazing grace
How sweet the sound
That saved a wretch like me
I once was lost
But now I'm found
Was blind but now I see
`,
    chords: `
`,
  },
{
    id: 37,
    title: "37. How Great Thou Art",
    key: "G",
    youtube: "",
    lyrics: `
Verse 1
O Lord my God
When I in awesome wonder
Consider all the worlds
Thy Hands have made
I see the stars
I hear the rolling thunder
Thy power throughout
The universe displayed
Chorus
Then sings my soul
My Savior God to Thee
How great Thou art
How great Thou art
Then sings my soul
My Savior God to Thee
How great Thou art
How great Thou art
Verse 2
And when I think
That God His Son not sparing
Sent Him to die
I scarce can take it in
That on the Cross
My burden gladly bearing
He bled and died to take away my sin
Chorus
Then sings my soul
My Savior God to Thee
How great Thou art
How great Thou art
Then sings my soul
My Savior God to Thee
How great Thou art
How great Thou art
Verse 3
When Christ shall come
With shout of acclamation
And lead me home
What joy shall fill my heart
Then I shall bow with humble adoration
And then proclaim
My God how great Thou art
Chorus
Then sings my soul
My Savior God to Thee
How great Thou art
How great Thou art
Then sings my soul
My Savior God to Thee
How great Thou art
How great Thou art
Tag
How great Thou art
How great Thou art
`,
    chords: `
`,
  },
{
    id: 38,
    title: "38. Blessed Be Your Name",
    key: "G",
    youtube: "",
    lyrics: `
Verse 1
Blessed be Your name
In the land that is plentiful
Where Your streams
Of abundance flow
Blessed be Your name
Blessed be Your name
When I'm found in the desert place
Though I walk
Through the wilderness
Blessed be Your name
Pre Chorus
Every blessing You pour out
I'll turn back to praise
When the darkness closes in Lord
Still I will say
Chorus
Blessed be the name of the Lord
Blessed be Your name
Blessed be the name of the Lord
Blessed be Your glorious name
Verse 2
Blessed be Your name
When the sun's shining down on me
When the world's
All as it should be
Blessed be Your name
Blessed be Your name
On the road marked with suffering
Though there's pain
In the offering
Blessed be Your name
Pre Chorus
Every blessing You pour out
I'll turn back to praise
When the darkness closes in Lord
Still I will say
Chorus
Blessed be the name of the Lord
Blessed be Your name
Blessed be the name of the Lord
Blessed be Your glorious name
Bridge
You give and take away
You give and take away
My heart will choose to say
Lord blessed be Your name
Chorus
Blessed be the name of the Lord
Blessed be Your name
Blessed be the name of the Lord
Blessed be Your glorious name
`,
    chords: `
`,
  },
{
    id: 39,
    title: "39. Change My Heart, O God",
    key: "D",
    youtube: "",
    lyrics: `
Chorus
Change my heart, oh God
Make it ever true
Change my heart, oh God
May I be like You
Change my heart, oh God
Make it ever true
Change my heart, oh God
May I be like You
Verse
You are the potter
I am the clay
Mold me and make me
This is what I pray
Chorus
Change my heart oh God
Make it ever true
Change my heart oh God
Make it ever true
Verse
You are the potter
I am the clay
Mold me and make me
This is what I pray
Chorus
Change my heart oh God
Make it ever true
Change my heart oh God
Make it ever true
`,
    chords: `
`,
  },
{
    id: 40,
    title: "40. Breathe",
    key: "D",
    youtube: "",
    lyrics: `
Verse 1
This is the air I breathe
This is the air I breathe
Your holy presence
Living in me
Verse 2
This is my daily bread
This is my daily bread
Your very word
Spoken to me
Chorus
And I
I'm desperate for You
And I
I'm lost without You
Verse 1
This is the air I breathe
This is the air I breathe
Your holy presence
Living in me
Verse 2
This is my daily bread
This is my daily bread
Your very word
Spoken to me
Chorus
And I
I'm desperate for You
And I
I'm lost without You
Tag
I'm lost without You
I'm lost without You
`,
    chords: `
`,
  },
{
    id: 41,
    title: "41. You Are My All in All",
    key: "G",
    youtube: "",
    lyrics: `
Verse 1
You are my strength
When I am weak
You are the treasure
That I seek
You are my all in all
Seeking You as a precious jewel
Lord to give up I'd be a fool
You are my all in all
Chorus
Jesus Lamb of God
Worthy is Your name
Jesus Lamb of God
Worthy is Your name
Verse 1
Taking my sin
My cross my shame
Rising again I bless Your name
You are my all in all
When I fall down You pick me up
When I am dry You fill my cup
You are my all in all
Chorus
Jesus Lamb of God
Worthy is Your name
Jesus Lamb of God
Worthy is Your name
Verse 1
You are my strength
When I am weak
You are the treasure
That I seek
You are my all in all
Seeking You as a precious jewel
Lord to give up I'd be a fool
You are my all in all
Chorus
Jesus Lamb of God
Worthy is Your name
Jesus Lamb of God
Worthy is Your name
Tag
Worthy is Your name
`,
    chords: `
`,
  },
{
    id: 42,
    title: "42. Give Me Jesus (Upperoom)",
    key: "D",
    youtube: "",
    lyrics: `
Verse 1
I don’t want anything but You
You’re more than every dream come true
All of the things I thought I wanted
Don’t come close to knowing You
Verse 2
Now that I’m Yours and You are mine
Our love is the secret that I find
I’ll spend forever in the pleasure
I’ve found looking in Your eyes
Chorus
Give me Jesus
Give me Jesus
You can have all this world
You can have all this world
Verse 3
More than silver more than gold
You are the treasure that I hold
Now that I’ve tasted of Your goodness
Nothing else will satisfy
Chorus
Give me Jesus
Give me Jesus
You can have all this world
You can have all this world
Bridge 1
I don’t want anyone else
I don’t need anything else
You are my one thing
You are my one thing
Refrain
You are my one thing
You are my one thing
You are my one thing
Chorus
Give me Jesus
Give me Jesus
You can have all this world
You can have all this world
Bridge 1
I don’t want anyone else
I don’t need anything else
You are my one thing
You are my one thing
Refrain
You are my one thing
You are my one thing
You are my one thing
Bridge 2
I don't care if they call me crazy
I don't care if they call me crazy
You are my one thing
You are my one thing
`,
    chords: `
`,
  },
{
    id: 43,
    title: "43. Give Me Jesus",
    key: "G",
    youtube: "",
    lyrics: `
Verse 1
In the morning, when I rise
In the morning, when I rise
In the morning, when I rise, give me Jesus
Chorus
Give me Jesus
Give me Jesus
You can have all this world
But give me Jesus
Verse 2
When I am alone
When I am alone
When I am alone, give me Jesus
Chorus
Give me Jesus
Give me Jesus
You can have all this world
But give me Jesus
Verse 3
When I come to die
When I come to die
When I come to die, give me Jesus
Chorus 1
Give me Jesus
Give me Jesus
You can have all this world
You can have all this world
You can have all this world
But give me Jesus
`,
    chords: `
`,
  },
{
    id: 44,
    title: "44. I Love You Lord",
    key: "G",
    youtube: "",
    lyrics: `
Chorus 1
I love You Lord
And I lift my voice
To worship You
Oh my soul rejoice
Chorus 2
Take joy my King
In what You hear
May it be a sweet sweet sound
In Your ear
Chorus 1
I love You Lord
And I lift my voice
To worship You
Oh my soul rejoice
Chorus 2
Take joy my King
In what You hear
May it be a sweet
Sweet sound
In Your ear
Tag
May it be a sweet
Sweet sound
May it be a sweet
Sweet sound
In Your ear
`,
    chords: `
`,
  },
{
    id: 45,
    title: "45. In Moments Like These",
    key: "G",
    youtube: "",
    lyrics: `
Verse
In moments like these, I sing out a song
I sing out a love song to Jesus
In moments like these, I lift up my hands
I lift up my hands to the Lord
Chorus
Singing, I love You, Lord
Singing, I love You, Lord
Singing, I love You, Lord
I love You
Verse
In moments like these, I sing out a song
I sing out a love song to Jesus
In moments like these, I lift up my hands
I lift up my hands to the Lord
Chorus
Singing, I love You, Lord
Singing, I love You, Lord
Singing, I love You, Lord
I love You
Chorus
Singing, I love You, Lord
Singing, I love You, Lord
Singing, I love You, Lord
I love You
`,
    chords: `
`,
  },
{
    id: 46,
    title: "46. His Mercy Is More",
    key: "C",
    youtube: "",
    lyrics: `
Chorus
Praise the Lord
His mercy is more
Stronger than darkness 
new every morn
Our sins they are many
His mercy is more
Verse 1
What love could remember 
no wrongs we have done
Omniscient all knowing
He counts not their sum
Thrown into a sea 
without bottom or shore
Our sins they are many
His mercy is more
Chorus
Praise the Lord
His mercy is more
Stronger than darkness 
new every morn
Our sins they are many
His mercy is more
Verse 2
What patience would wait 
as we constantly roam
What Father so tender 
is calling us home
He welcomes the weakest 
the vilest the poor
Our sins they are many
His mercy is more
Chorus
Praise the Lord
His mercy is more
Stronger than darkness 
new every morn
Our sins they are many
His mercy is more
Verse 3
What riches of kindness 
He lavished on us
His blood was the payment 
His life was the cost
We stood 'neath a debt 
we could never afford
Our sins they are many
His mercy is more
Chorus
Praise the Lord
His mercy is more
Stronger than darkness 
new every morn
Our sins they are many
His mercy is more
Tag
Our sins they are many
His mercy is more
`,
    chords: `
`,
  },
{
    id: 47,
    title: "47. Come Thou Fount",
    key: "G",
    youtube: "",
    lyrics: `
Verse 1
Come Thou Fount of every blessing
Tune my heart to sing Thy grace
Streams of mercy never ceasing
Call for songs of loudest praise
Verse 2
Teach me some melodious sonnet
Sung by flaming tongues above
Praise the mount I’m fixed upon it
Mount of God’s redeeming love
Verse 3
Here I raise my Ebenezer
Here there by Thy help I've come
And I hope by Thy good pleasure
Safely to arrive at home
Verse 4
Jesus sought me when a stranger
Wandering from the fold of God
He to rescue me from danger
Interposed His precious blood
Verse 5
O to grace how great a debtor
Daily I'm constrained to be
Let that goodness now like a fetter
Bind my wandering heart to Thee
Verse 6
Prone to wander Lord I feel it
Prone to leave the God I love
Here's my heart O take and seal it
Seal it for Thy courts above
Tag
Here's my heart O take and seal it
Seal it for Thy courts above
`,
    chords: `
`,
  },
];

// ---------- YouTube helpers ----------
function isYouTubeUrl(url?: string) {
  if (!url) return false;
  return /(^https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//i.test(url);
}

function toYouTubeEmbedUrl(url: string) {
  const trimmed = url.trim();

  const embedMatch = trimmed.match(/youtube\.com\/embed\/([^?&/]+)/i);
  if (embedMatch?.[1]) return `https://www.youtube.com/embed/${embedMatch[1]}`;

  const shortMatch = trimmed.match(/youtu\.be\/([^?&/]+)/i);
  if (shortMatch?.[1]) return `https://www.youtube.com/embed/${shortMatch[1]}`;

  const watchMatch = trimmed.match(/[?&]v=([^?&/]+)/i);
  if (watchMatch?.[1]) return `https://www.youtube.com/embed/${watchMatch[1]}`;

  return "";
}

const MOLDOVA_TRICOLOR_URL =
  "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg";


// ---------- Section detection + chorus bold ----------
function detectSectionLabel(line: string): {
  isLabel: boolean;
  type: SectionType;
  labelText: string;
} {
  const s = line.trim();
  if (!s) return { isLabel: false, type: "other", labelText: "" };

  // Chorus, Chorus 1, Chorus 2, R:, Refren, etc.
const chorusMatch = s.match(
  /^(R|R:|R\.|Ref|Ref\.|Refren|Chorus(?:\s+\d+)?)\s*$/i
);

if (chorusMatch) {
  return {
    isLabel: true,
    type: "chorus",
    labelText:
      /^R|^Ref/i.test(s)
        ? "Chorus"
        : s,
  };
}

  // Verse 1, Verse 2, Verse 3
const verseMatch = s.match(
  /^verse(?:\s+(\d+))?\s*[:.]?$/i
);

if (verseMatch) {
  return {
    isLabel: true,
    type: "verse",
    labelText: verseMatch[1]
      ? `Verse ${verseMatch[1]}`
      : "Verse",
  };
}

// Legacy format: 1. 2. 3.
if (/^\d+\s*[:.]?$/.test(s)) {
  return {
    isLabel: true,
    type: "verse",
    labelText: `Verse ${s.replace(/[.:]/g, "")}`,
  };
}

  // Pre Chorus
// Pre Chorus, Pre Chorus 1, Pre Chorus 2
const preChorusMatch = s.match(
/^pre[\s-]*chorus(?:\s+\d+)?\s*$/i
);
 
if (preChorusMatch) {
return {
isLabel: true,
type: "prechorus",
labelText: s,
};
}
// Bridge, Bridge 1, Bridge 2
const bridgeMatch = s.match(
  /^bridge(?:\s+\d+)?\s*$/i
);

if (bridgeMatch) {
  return {
    isLabel: true,
    type: "bridge",
    labelText: s,
  };
}

// Tag, Tag 1, Tag 2
const tagMatch = s.match(
  /^tag(?:\s+\d+)?\s*$/i
);

if (tagMatch) {
  return {
    isLabel: true,
    type: "tag",
    labelText: s,
  };
}

  return { isLabel: false, type: "other", labelText: "" };
}

const isPhonePortrait = () => {
  if (typeof window === "undefined") return false;
  const w = window.innerWidth;
  const h = window.innerHeight;
  return w < 520 && h > w;
};

/**
 * Render text with:
 * - normal mode: pre-wrap (wraps)
 * - mono mode (lyrics+chords): pre (NO WRAP) + horizontal scroll
 */
function renderWithSectionStyling(
  text: string,
  opts: { stageMode: boolean; dark: boolean; autoBoldChorus: boolean; mono?: boolean }
) {
  const lines = text.split("\n");
  let currentSection: SectionType = "other";
  const isPhone = typeof window !== "undefined" && window.innerWidth < 420;

  const innerStyle: React.CSSProperties = {
    whiteSpace: opts.mono ? "pre" : "pre-wrap",
    fontFamily: opts.mono
      ? "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
      : "Arial, sans-serif",
    fontSize: opts.stageMode ? 28 : isPhone ? 14 : 16,
    lineHeight: opts.stageMode ? 1.7 : opts.mono ? 1.45 : 1.6,
    color: opts.dark ? "#fff" : "#000",
    marginTop: 14,
    overflowWrap: opts.mono ? "normal" : "anywhere",
    wordBreak: "normal",
    display: opts.mono ? "inline-block" : "block",
    minWidth: opts.mono ? "max-content" : undefined,
  };

  const labelStyle = (type: SectionType): React.CSSProperties => ({
    display: "inline-block",
    padding: opts.stageMode ? "6px 12px" : "4px 10px",
    borderRadius: 999,
    fontWeight: 900,
    margin: "10px 0 6px",
    letterSpacing: 0.5,
    background: opts.dark
      ? "rgba(255,255,255,0.12)"
      : type === "chorus"
      ? "rgba(11,95,255,0.12)"
      : "rgba(0,0,0,0.06)",
    color: opts.dark ? "#fff" : type === "chorus" ? "#0B5FFF" : "#111",
  });

  const outerStyle: React.CSSProperties = opts.mono
    ? { overflowX: "auto", WebkitOverflowScrolling: "touch" }
    : {};

  return (
    <div style={outerStyle}>
      <div style={innerStyle}>
        {lines.map((line, idx) => {
          const { isLabel, type, labelText } = detectSectionLabel(line);

          if (isLabel) {
            currentSection = type;
            return (
              <div key={idx}>
                <span
  style={{
    ...labelStyle(type),
    cursor: "pointer",
  }}
onClick={(e) => {
  e.currentTarget.scrollIntoView({
    behavior: "smooth",
  });
}}
>
  {labelText}
</span>
              </div>
            );
          }

         const shouldBold =
opts.autoBoldChorus &&
(
currentSection === "chorus" ||
currentSection === "prechorus"
) &&
line.trim().length > 0;

          return (
            <div
              key={idx}
              style={{
                fontWeight: shouldBold ? 900 : 500,
                letterSpacing: opts.mono ? "-0.3px" : undefined,
              }}
            >
              {line}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ---------- Transpose helpers ----------
const NOTES_SHARP = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const NOTES_FLAT  = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

const ENHARMONIC_TO_SHARP: Record<string, string> = {
  Db: "C#",
  Eb: "D#",
  Gb: "F#",
  Ab: "G#",
  Bb: "A#",
  Cb: "B",
  Fb: "E",
  "E#": "F",
  "B#": "C",
};

// Cleanup uncommon/ugly spellings after output selection
const BAD_ENHARMONICS: Record<string, string> = {
  "Eb#": "E",
  "B#": "C",
  "Cb": "B",
  "Fb": "E",
};

function normNoteToSharp(n: string) {
  return ENHARMONIC_TO_SHARP[n] ?? n;
}

function fixEnharmonic(n: string) {
  return BAD_ENHARMONICS[n] ?? n;
}

function transposeNote(note: string, semis: number, preferFlats: boolean) {
  const base = normNoteToSharp(note);
  const idx = NOTES_SHARP.indexOf(base);
  if (idx < 0) return note;

  const next = (idx + semis + 1200) % 12;
  const out = preferFlats ? NOTES_FLAT[next] : NOTES_SHARP[next];
  return fixEnharmonic(out);
}

function transposeChordToken(token: string, semis: number, preferFlats: boolean) {
  const m = token.match(/^([A-G])([#b]?)(.*)$/);
  if (!m) return token;

  const root = m[1] + (m[2] || "");
  let rest = m[3] || "";

  // Handle slash bass notes (now supports /C# properly because regex captures it)
  if (rest.includes("/")) {
    const [beforeSlash, afterSlash] = rest.split("/", 2);

    // parse bass: letter + optional accidental + anything else
    const bassMatch = afterSlash.match(/^([A-G])([#b]?)(.*)$/);
    if (bassMatch) {
      const bassRoot = bassMatch[1] + (bassMatch[2] || "");
      const bassRest = bassMatch[3] || "";

      const newBass = transposeNote(bassRoot, semis, preferFlats);

      // IMPORTANT: if bassRest starts with stray accidentals, drop them
      const cleanedBassRest = bassRest.replace(/^[#b]+/, "");

      rest = `${beforeSlash}/${newBass}${cleanedBassRest}`;
    }
  }

  const newRoot = transposeNote(root, semis, preferFlats);
  return `${newRoot}${rest}`;
}


// Matches chords even if they end with # (A/C#, F/A# etc)
// Keeps separators so spacing is preserved
const CHORD_TOKEN_RX =
  /(^|[^A-Za-z0-9_])([A-G])([#b]?)(?:(maj|min|dim|aug|sus|add|m)?([0-9]{0,2})?)?(?:\/([A-G])([#b]?))?(?=$|[^A-Za-z0-9_])/g;




// Safety pass (optional but harmless): fix any leftover weird spellings if they appear
function normalizeSpellings(text: string) {
  return text
    .replace(/\bEb#\b/g, "E")
    .replace(/\bFb\b/g, "E")
    .replace(/\bB#\b/g, "C")
    .replace(/\bCb\b/g, "B");
}

function transposeText(text: string, semis: number, preferFlats: boolean) {
  if (semis === 0) return text;

  return text.replace(
    CHORD_TOKEN_RX,
    (full, lead, letter, accidental, qual, digits, bassLetter, bassAcc) => {
      const token =
        `${letter}${accidental || ""}` +
        `${qual || ""}${digits || ""}` +
        (bassLetter ? `/${bassLetter}${bassAcc || ""}` : "");

      return `${lead}${transposeChordToken(token, semis, preferFlats)}`;
    }
  );
}

function transposeKeyLabel(key: string, semis: number, preferFlats: boolean) {
  const m = key.match(/^([A-G])([#b]?)(m)?$/i);
  if (!m) return key;

  const root = m[1].toUpperCase() + (m[2] || "");
  const minor = m[3] ? "m" : "";

  const newRoot = transposeNote(root, semis, preferFlats);
  return `${newRoot}${minor}`;
}
// ---------- Chord extraction + degree ordering + diagrams ----------

function extractChordTokens(text: string) {
  const found: string[] = [];
  const seen = new Set<string>();

  const rx =
    /(^|[^A-Za-z0-9_])([A-G])([#b]?)(?:(maj|min|dim|aug|sus|add|m)?([0-9]{0,2})?)?(?:\/([A-G])([#b]?))?(?=$|[^A-Za-z0-9_])/g;

  let m: RegExpExecArray | null;
  while ((m = rx.exec(text)) !== null) {
    const token =
      `${m[2]}${m[3] || ""}${m[4] || ""}${m[5] || ""}` +
      (m[6] ? `/${m[6]}${m[7] || ""}` : "");

    if (!token || seen.has(token)) continue;
    seen.add(token);
    found.push(token);
  }

  return found;
}

function chordRoot(token: string) {
  const m = token.match(/^([A-G])([#b]?)/);
  return m ? m[1] + (m[2] || "") : "";
}

function chordIsMinor(token: string) {
  return /^([A-G])([#b]?)(m)(?!aj)/i.test(token);
}

function stripSlash(token: string) {
  return token.split("/")[0];
}

const MAJOR_DEGREE_OFFSETS = [0, 2, 4, 5, 7, 9, 11];

// ✅ add this (natural minor)
const MINOR_DEGREE_OFFSETS = [0, 2, 3, 5, 7, 8, 10];


function degreeRootNote(
  root: string,
  degree: number,
  preferFlats: boolean,
  isMinor: boolean
) {
  const idx = noteIndex(root);
  const offsets = isMinor ? MINOR_DEGREE_OFFSETS : MAJOR_DEGREE_OFFSETS;
  const off = offsets[degree - 1];
  const out = preferFlats
    ? NOTES_FLAT[(idx + off) % 12]
    : NOTES_SHARP[(idx + off) % 12];
  return fixEnharmonic(out);
}

function chordsByDegreeOrder(
  used: string[],
  displayKey: string,
  preferFlats: boolean
) {
  const { root, minor } = splitKeyLabel(displayKey);

  const order = minor
    ? [1, 4, 5, 6, 7, 3]   // ✅ minor keys
    : [1, 4, 5, 6, 2, 3]; // ✅ major keys

  const byRoot = new Map<string, string[]>();
  used.forEach((c) => {
    const r = chordRoot(stripSlash(c));
    if (!byRoot.has(r)) byRoot.set(r, []);
    byRoot.get(r)!.push(c);
  });

  return order
    .map((d) => {
      const r = degreeRootNote(root, d, preferFlats, minor);
      const list = byRoot.get(r) || [];
      if (!list.length) return null;

      // minor expectations
      const wantMinor = minor
        ? d === 1 || d === 4
        : d === 2 || d === 3 || d === 6;

      return list.find((c) => chordIsMinor(c) === wantMinor) || list[0];
    })
    .filter(Boolean) as string[];
}

function ChordDiagram({ chord, dark }: { chord: string; dark: boolean }) {
  // parse chord root + minor
  const mm = chord.match(/^([A-G])([#b]?)(m)?/);
  const root = mm ? mm[1] + (mm[2] || "") : "C";
  const isMinor = !!(mm && mm[3]);

  // open-chord shapes (low E → high E). 0 means open; numbers are frets.
  const openChords: Record<string, number[]> = {
    C:  [0, 3, 2, 0, 1, 0],
    G:  [3, 2, 0, 0, 0, 3],
    D:  [0, 0, 0, 2, 3, 2],
    A:  [0, 0, 2, 2, 2, 0],
    E:  [0, 2, 2, 1, 0, 0],
    Am: [0, 0, 2, 2, 1, 0],
    Em: [0, 2, 2, 0, 0, 0],
    Dm: [0, 0, 0, 2, 3, 1],
  };

  const key = root + (isMinor ? "m" : "");
  const openShape = openChords[key];

  // fallback E-shape (barre)
  const fallbackShape = isMinor
    ? [0, 2, 2, 0, 0, 0]   // Em shape
    : [0, 2, 2, 1, 0, 0];  // E shape

  const shape = openShape ?? fallbackShape;

  // semitone shift from E only for barre fallback
  const semisFromE = openShape ? 0 : (noteIndex(root) - noteIndex("E") + 12) % 12;

  // absolute frets
  const absFrets = shape.map(f => (f === 0 ? 0 : f + semisFromE));

  // If barre chord, show diagram starting at the barre fret
  const startFret = openShape || semisFromE === 0 ? 1 : semisFromE; // e.g., B -> 7

  // convert absolute -> relative frets for drawing window (1..4)
  const relFrets = absFrets.map(f => (f === 0 ? 0 : f - startFret + 1));
  const barre = !openShape && semisFromE > 0;

  // drawing constants
  const W = 90, H = 120;
  const left = 12, top = 20;
  const xStep = 13;
  const yStep = 16;

  const stroke = dark ? "#aaa" : "#555";
  const dot = dark ? "#9BE7FF" : "#0B5FFF";
  const text = dark ? "#fff" : "#111";

  return (
    <svg width={W} height={H}>
      <text x="45" y="12" textAnchor="middle" fontSize="12" fontWeight="800" fill={text}>
        {chord}
      </text>

      {/* start fret label for barre chords */}
      {startFret > 1 && (
        <text x="6" y="32" fontSize="10" fontWeight="800" fill={text}>
          {startFret}fr
        </text>
      )}

      {/* strings */}
      {[0,1,2,3,4,5].map(i => (
        <line key={"s"+i} x1={left + i*xStep} y1={top} x2={left + i*xStep} y2={top + 4*yStep} stroke={stroke} />
      ))}

      {/* frets (0..4 lines = 4 fret spaces) */}
      {[0,1,2,3,4].map(i => (
        <line
          key={"f"+i}
          x1={left}
          y1={top + i*yStep}
          x2={left + 5*xStep}
          y2={top + i*yStep}
          stroke={stroke}
          strokeWidth={i === 0 && startFret === 1 ? 3 : 1}
        />
      ))}

      {/* barre line shown at fret 1 position within the window */}
      {barre && (
        <rect
          x={left}
          y={top + ((1 - 1) * yStep) + yStep / 2 - 3}
          width={5*xStep}
          height={6}
          rx={3}
          fill={dot}
        />
      )}

      {/* dots */}
      {relFrets.map((f, i) =>
        f > 0 && f <= 4 ? (
          <circle
            key={"d"+i}
            cx={left + i*xStep}
            cy={top + ((f - 1) * yStep) + yStep/2}
            r={5}
            fill={dot}
          />
        ) : null
      )}
    </svg>
  );
}

function ChordStrip({ chords, dark }: { chords: string[]; dark: boolean }) {
  if (!chords.length) return null;
  return (
    <div style={{ display: "flex", gap: 12, overflowX: "auto" }}>
      {chords.map((c) => (
        <ChordDiagram key={c} chord={c} dark={dark} />
      ))}
    </div>
  );
}
// ---------- Key selector logic (auto flats/sharps) ----------
const KEY_OPTIONS = [
  "C",
  "Db",
  "D",
  "Eb",
  "E",
  "F",
  "Gb",
  "G",
  "Ab",
  "A",
  "Bb",
  "B",
];

const FLAT_KEYS = new Set([
  "F",
  "Bb",
  "Eb",
  "Ab",
  "Db",
  "Gb",
  "Cb",
  "Dm",
  "Gm",
  "Cm",
  "Fm",
  "Bbm",
  "Ebm",
  "Abm",
]);

function splitKeyLabel(k: string): { root: string; minor: boolean } {
  const m = k.trim().match(/^([A-G])([#b]?)(m)?$/i);
  if (!m) return { root: k.trim(), minor: false };
  return { root: m[1].toUpperCase() + (m[2] || ""), minor: !!m[3] };
}

function noteIndex(root: string) {
  const s = normNoteToSharp(root);
  return NOTES_SHARP.indexOf(s);
}

function keyPrefersFlats(keyLabel: string) {
  const k = keyLabel.trim();
  if (k.includes("b")) return true;
  if (k.includes("#")) return false;
  if (FLAT_KEYS.has(k)) return true;
  return false; // default to sharps for naturals like E, A, D, G, B
}

function nearestSemitoneDelta(fromRoot: string, toRoot: string) {
  const a = noteIndex(fromRoot);
  const b = noteIndex(toRoot);
  if (a < 0 || b < 0) return 0;
  let d = (b - a + 12) % 12; // 0..11
  if (d > 6) d -= 12; // -5..+6 (nearest direction)
  return d;
}

function btnStyle(dark: boolean): React.CSSProperties {
  return {
    padding: "6px 10px",
    cursor: "pointer",
    borderRadius: 8,
    border: dark ? "1px solid rgba(255,255,255,0.25)" : "1px solid rgba(0,0,0,0.15)",
    background: dark ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.95)",
    color: dark ? "#fff" : "#111",
    fontSize: 13,
  };
}

function pillStyle(active: boolean, dark: boolean): React.CSSProperties {
  return {
    padding: "8px 12px",
    margin: "0 6px 10px",
    cursor: "pointer",
    borderRadius: 999,
    border: active
      ? dark
        ? "1px solid #9BE7FF"
        : "1px solid #0B5FFF"
      : dark
      ? "1px solid rgba(255,255,255,0.25)"
      : "1px solid rgba(0,0,0,0.15)",
    background: active
      ? dark
        ? "rgba(155,231,255,0.15)"
        : "rgba(11,95,255,0.10)"
      : dark
      ? "rgba(255,255,255,0.06)"
      : "rgba(255,255,255,0.95)",
    color: dark ? "#fff" : "#111",
    fontSize: 14,
    fontWeight: active ? 800 : 500,
  };
}

export default function App() {
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>("lyrics");
  const [selectedCategory, setSelectedCategory] = useState("All Songs");
  const [showCategories, setShowCategories] = useState(true);
  const categories = [
"All Songs",
"Praise & Celebration",
"Worship & Adoration",
"Gratitude & Thanksgiving",
"Gospel & Christ-Centered",
"Surrender & Discipleship",
"Prayer, Intimacy & Devotion",
"Hymns & Timeless Classics",
"Hope, Faith & Encouragement",
];
const filteredSongs =
  selectedCategory === "All Songs"
    ? songsData
    : songsData.filter((song) => {
        if (selectedCategory === "Praise & Celebration") {
          return (
            song.title === "1. Goodness of God" ||
            song.title === "2. Gratitude"
          );
        }

        return true;
      });

  const [stageMode, setStageMode] = useState(false);
  const [showFlag, setShowFlag] = useState(false);
  const [keepAwake, setKeepAwake] = useState(false);
  const [autoBoldChorus, setAutoBoldChorus] = useState(true);

  const [showVideo, setShowVideo] = useState(false);

  const [transposeSemis, setTransposeSemis] = useState(0);
  const [preferFlats, setPreferFlats] = useState(false);

  const [targetKey, setTargetKey] = useState<string>("C");
  const [showKeyPicker, setShowKeyPicker] = useState(false);

  // Force a re-render on rotation so the hint can appear/disappear
  const [, setViewportTick] = useState(0);

  const wakeLockRef = useRef<any>(null);
  const dark = stageMode;

  useEffect(() => {
    const onResize = () => setViewportTick((v) => v + 1);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const containerStyle: React.CSSProperties = useMemo(() => {
    const base: React.CSSProperties = {
      position: "relative",
      minHeight: "100vh",
      overflowY: "scroll",
      padding: stageMode ? 28 : 20,
      paddingBottom: showVideo ? 260 : 20,
      fontFamily: "Arial, sans-serif",
      background: stageMode ? "#000" : "#eaf4ff",
      color: stageMode ? "#fff" : "#000",
    };

    
if (showFlag && !stageMode) {
  base.backgroundImage = `
    linear-gradient(
      90deg,
      rgba(0, 51, 160, 0.18) 0%,
      rgba(0, 51, 160, 0.18) 33.33%,
      rgba(255, 209, 0, 0.18) 33.33%,
      rgba(255, 209, 0, 0.18) 66.66%,
      rgba(206, 17, 38, 0.18) 66.66%,
      rgba(206, 17, 38, 0.18) 100%
    )
  `;
  base.backgroundRepeat = "no-repeat";
}

    return base;
  }, [stageMode, showFlag, showVideo]);

  useEffect(() => {
    let cancelled = false;

    async function enableWakeLock() {
      try {
        if (!("wakeLock" in navigator)) return;
        // @ts-ignore
        const sentinel = await navigator.wakeLock.request("screen");
        if (cancelled) {
          await sentinel.release();
          return;
        }
        wakeLockRef.current = sentinel;
      } catch {}
    }

    async function disableWakeLock() {
      try {
        if (wakeLockRef.current) {
          await wakeLockRef.current.release();
          wakeLockRef.current = null;
        }
      } catch {}
    }

    if (keepAwake) enableWakeLock();
    else disableWakeLock();

    return () => {
      cancelled = true;
      disableWakeLock();
    };
  }, [keepAwake]);

  // When a song is selected, reset transposition and set default key + accidentals
  useEffect(() => {
    if (!selectedSong) return;
    setTransposeSemis(0);
    setTargetKey(selectedSong.key);
    setPreferFlats(keyPrefersFlats(selectedSong.key));
    setShowKeyPicker(false);
  }, [selectedSong?.id]);

  // Lyrics + Chords view content (transposed)
const bothText = useMemo(() => {
  if (!selectedSong) return "";
  const raw = selectedSong.chords
    .split("\n")
    .some((l) => /[a-zA-ZăâîșțĂÂÎȘȚ]/.test(l))
    ? selectedSong.chords
    : `${selectedSong.chords}\n\n${selectedSong.lyrics}`;
  return transposeText(raw, transposeSemis, preferFlats);
}, [selectedSong, transposeSemis, preferFlats]);

// --- chords-only text (transposed) for diagrams ---
const transposedChordsText = useMemo(() => {
  if (!selectedSong) return "";
  return transposeText(selectedSong.chords || "", transposeSemis, preferFlats);
}, [selectedSong, transposeSemis, preferFlats]);

// --- extract used chords ---
const usedChords = useMemo(() => {
  return extractChordTokens(transposedChordsText);
}, [transposedChordsText]);

// ✅ displayKey MUST be defined before orderedChordsForStrip uses it
const displayKey = useMemo(() => {
  if (!selectedSong) return "";
  return transposeKeyLabel(selectedSong.key, transposeSemis, preferFlats);
}, [selectedSong, transposeSemis, preferFlats]);

// --- order chords as 1,4,5,6,2,3 ---
const orderedChordsForStrip = useMemo(() => {
  if (!selectedSong) return [];
  return chordsByDegreeOrder(usedChords, displayKey, preferFlats);
}, [selectedSong?.id, usedChords, displayKey, preferFlats]);


  useEffect(() => {
    setShowVideo(false);
  }, [selectedSong?.id]);

  const embedUrl = useMemo(() => {
    if (!selectedSong?.youtube) return "";
    if (!isYouTubeUrl(selectedSong.youtube)) return "";
    return toYouTubeEmbedUrl(selectedSong.youtube);
  }, [selectedSong?.youtube]);

  const metaStyle: React.CSSProperties = {
    textAlign: "center",
    fontSize: stageMode ? 18 : 14,
    color: dark ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.8)",
    marginTop: 6,
    position: "relative",
  };

  const keyButtonStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    marginLeft: 8,
    padding: "4px 10px",
    borderRadius: 999,
    border: dark ? "1px solid rgba(255,255,255,0.25)" : "1px solid rgba(0,0,0,0.15)",
    background: dark ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.95)",
    color: dark ? "#fff" : "#111",
    fontWeight: 800,
    cursor: stageMode ? "default" : "pointer",
    userSelect: "none",
  };

  const keyPickerStyle: React.CSSProperties = {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    top: stageMode ? 34 : 30,
    zIndex: 1000,
    width: "min(520px, 92vw)",
    padding: 12,
    borderRadius: 14,
    border: dark ? "1px solid rgba(255,255,255,0.22)" : "1px solid rgba(0,0,0,0.12)",
    background: dark ? "#111" : "#fff",
    boxShadow: "0 12px 30px rgba(0,0,0,0.20)",
  };

  function applyTargetKey(newKey: string) {
    if (!selectedSong) return;

    const from = splitKeyLabel(selectedSong.key);
    const to = splitKeyLabel(newKey);

    const d = nearestSemitoneDelta(from.root, to.root);
    setTransposeSemis(d);
    setPreferFlats(keyPrefersFlats(newKey));
    setTargetKey(newKey);
    setShowKeyPicker(false);
  }

  return (
    <div style={containerStyle}>
      
{!stageMode && (
  <img
    src={kingdomKidsLogo}
    alt="Kingdom’s Kids"
    style={{
      position: "absolute",
      top: 8,
      left: 3,
      width: 80,
      opacity: 0.80,
      zIndex: 0,
      pointerEvents: "none",
    }}
  />
)}

      <style>{`
        .moldovaTitle {
          font-weight: 900;
          letter-spacing: 0.5px;
          text-align: center;
          margin-bottom: 16px;
          font-size: 38px;
          background: linear-gradient(
            90deg,
            #0033A0 0%,
            #0033A0 33%,
            #FFD100 33%,
            #FFD100 66%,
            #CE1126 66%,
            #CE1126 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 100%;
          animation: moldovaWave 3.5s ease-in-out infinite;
          text-shadow: 0 1px 10px rgba(0,0,0,0.12);
        }
        @keyframes moldovaWave {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @media (max-width: 480px) {
          .moldovaTitle { font-size: 30px; }
        }
      `}</style>
      {showCategories && (
  <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
    <h1 className="moldovaTitle">Worship Songs</h1>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      {categories.map((cat) => (
        <div
          key={cat}
          onClick={() => {
            setSelectedCategory(cat);
            setShowCategories(false);
          }}
          style={{
            cursor: "pointer",
            padding: "14px",
            borderRadius: 12,
            background: "rgba(255,255,255,0.95)",
            border: "1px solid rgba(0,0,0,0.10)",
            fontWeight: 800,
            fontSize: 18,
          }}
        >
          {cat}
        </div>
      ))}
    </div>
  </div>
)}
      {!selectedSong ? (
        <div
style={{
maxWidth: 720,
margin: "0 auto",
position: "relative",
zIndex: 1,
display: showCategories ? "none" : "block",
}}
>
          {!showCategories && (
        <button
  onClick={() => setShowCategories(true)}
  style={{
    background: "none",
    border: "none",
    color: "#0033A0",
    cursor: "pointer",
    fontSize: 20,
    fontWeight: 800,
    marginBottom: 12,
  }}
>
  ← Categories
</button>
        
          <h1 className="moldovaTitle">Worship Songs</h1>

          <div style={{ display: "flex", flexDirection: "column", gap: 14, textAlign: "center" }}>
            {filteredSongs.map((song) => (
              <div
                key={`${song.id}-${song.title}`}
                onClick={() => {
  setSelectedSong(song);
  setViewMode("lyrics");
  setStageMode(false);
  setShowFlag(false);
  setTransposeSemis(0);
  setPreferFlats(keyPrefersFlats(song.key));
  setTargetKey(song.key);
  setShowVideo(false);

  setTimeout(() => {
  window.scrollTo(0, 0);
}, 0);
}}
                style={{
                  cursor: "pointer",
                  padding: "10px 8px",
                  borderRadius: 10,
                  border: "1px solid rgba(0,0,0,0.10)",
                  background: "rgba(255,255,255,0.98)",
                }}
              >
                <div style={{ fontWeight: 800, fontSize: 18 }}>{song.title}</div>
                <div style={{ fontSize: 14, opacity: 0.85 }}>
                   Key: {song.key}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
            <button
              onClick={() => {
                if (!selectedSong) {
  setShowCategories(true);
  return;
}
                setSelectedSong(null);
                setStageMode(false);
                setShowFlag(false);
                setTransposeSemis(0);
                setPreferFlats(false);
                setShowVideo(false);
                setShowKeyPicker(false);
              }}
             style={{
  background: "none",
  border: "none",
  color: dark ? "#9BE7FF" : "#0033A0",
  cursor: "pointer",

  // ✅ VISIBILITY
  fontSize: 22,       // bigger
  fontWeight: 900,    // bolder
  letterSpacing: 0.3,

  // ✅ POSITION (push below logo)
  marginTop: 72,      // key line 👈 adjust if needed

  // ✅ TOUCH FRIENDLY
  padding: "6px 0",

  alignSelf: "flex-start", // keeps it top-left in the row
}}
            >
              ← Back
            </button>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "flex-end" }}>
              <button onClick={() => setStageMode((v) => !v)} style={btnStyle(dark)}>
                {stageMode ? "Exit Stage" : "Stage Mode"}
              </button>


              <button onClick={() => setKeepAwake((v) => !v)} style={btnStyle(dark)}>
                {keepAwake ? "Screen Awake ✓" : "Keep Screen On"}
              </button>

              <button onClick={() => setAutoBoldChorus((v) => !v)} style={btnStyle(dark)}>
                {autoBoldChorus ? "Chorus Bold ✓" : "Chorus Bold"}
              </button>
            </div>
          </div>

          <h2 style={{ textAlign: "center", fontWeight: 900, fontSize: stageMode ? 38 : 22, marginTop: 14 }}>
            {selectedSong.title}
          </h2>


          {selectedSong.youtube && !embedUrl && !stageMode && (
            <div style={{ textAlign: "center", marginTop: 6 }}>
              <a href={selectedSong.youtube} target="_blank" rel="noopener noreferrer">
                ▶ Open Audio/Link
              </a>
            </div>
          )}

          <div style={metaStyle}>
            Key: <b>{displayKey}</b>
           
            {showKeyPicker && !stageMode && (
              <div style={keyPickerStyle} onClick={(e) => e.stopPropagation()}>
                <div style={{ fontWeight: 900, marginBottom: 10, opacity: dark ? 0.95 : 0.9 }}>
                  Select Key
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
                    gap: 8,
                  }}
                >
                  {KEY_OPTIONS.map((k) => {
                    const active = k === targetKey;
                    return (
                      <button
                        key={k}
                        onClick={() => applyTargetKey(k)}
                        style={{
                          padding: "10px 0",
                          borderRadius: 12,
                          border: active
                            ? dark
                              ? "1px solid #9BE7FF"
                              : "1px solid #0B5FFF"
                            : dark
                            ? "1px solid rgba(255,255,255,0.22)"
                            : "1px solid rgba(0,0,0,0.12)",
                          background: active
                            ? dark
                              ? "rgba(155,231,255,0.18)"
                              : "rgba(11,95,255,0.10)"
                            : dark
                            ? "rgba(255,255,255,0.06)"
                            : "rgba(255,255,255,0.98)",
                          color: dark ? "#fff" : "#111",
                          fontWeight: 900,
                          cursor: "pointer",
                        }}
                      >
                        {k}
                      </button>
                    );
                  })}
                </div>


                <div style={{ textAlign: "center", marginTop: 10 }}>
                  <button onClick={() => setShowKeyPicker(false)} style={btnStyle(dark)}>
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>


          {viewMode === "both" && isPhonePortrait() && !stageMode && (
            <div style={{ textAlign: "center", fontSize: 12, opacity: 0.65, marginBottom: 8 }}>
              Tip: rotate phone to landscape for better chord alignment
            </div>
          )}

{viewMode === "both" && (
  <ChordStrip chords={orderedChordsForStrip} dark={dark} />
)}

          {viewMode === "lyrics"
            ? renderWithSectionStyling(selectedSong.lyrics, {
                stageMode,
                dark,
                autoBoldChorus,
                mono: false,
              })
            : renderWithSectionStyling(bothText, {
                stageMode,
                dark,
                autoBoldChorus,
                mono: true,
              })}
        </div>
      )}

      {/* Floating YouTube mini-player overlay */}
      {showVideo && embedUrl && (
        <div
          style={{
            position: "fixed",
            bottom: 16,
            right: 16,
            width: 340,
            maxWidth: "92vw",
            paddingTop: "56.25%",
            background: "#000",
            borderRadius: 10,
            boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
            zIndex: 9999,
            overflow: "hidden",
          }}
        >
          <iframe
            src={embedUrl}
            title="YouTube player"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
          <button
            onClick={() => setShowVideo(false)}
            style={{
              position: "absolute",
              top: 6,
              right: 6,
              background: "rgba(0,0,0,0.65)",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              padding: "2px 8px",
              fontSize: 12,
            }}
            aria-label="Close video"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
