// ১. Variable কি ?
answer:JavaScript-এ variable হলো একটি স্টোরেজ বা স্থান, যেখানে কোনো ডেটা সংরক্ষণ করা হয়, যা প্রোগ্রামে পরবর্তীতে ব্যবহার করা যায়। 

// ২. Variable কিভাবে লিখতে হয় ?
answer:JavaScript-এ variable লিখতে গেলে তিনটি কীওয়ার্ড ব্যবহার করা হয়: var, let, এবং const। সাধারণত syntax হলো:

let variableName = value;   // let দিয়ে
var variableName = value;   // var দিয়ে
const variableName = value; // const দিয়ে

let এবং var দিয়ে variable মান পরিবর্তন করা যায়।

const দিয়ে variable মান পরিবর্তন করা যায় না।

// ৩. string type variable কি ও কি ভাবে লিখতে হয় ?
answer:String type variable হলো এমন একটি ভ্যারিয়েবল, যা টেক্সট বা অক্ষরের একটি সিরিজ ধরে রাখে। JavaScript-এ string টাইপের ভ্যারিয়েবল লিখতে গেলে ডাবল কোটেশন (" "), সিঙ্গেল কোটেশন (' '), অথবা ব্যাকটিক (  `) ব্যবহার করা হয়।

উদাহরণ:

let name = "Gouranga";  // ডাবল কোটেশন
let city = 'Dhaka';     // সিঙ্গেল কোটেশন
let message = `Hello, ${name}!`; // ব্যাকটিক (template string)

এগুলো সবই string ভ্যারিয়েবল।


// ৪. number type variable কি ও কি ভাবে লিখতে হয় ?
answer:Number type variable হলো এমন একটি ভ্যারিয়েবল, যা সংখ্যা বা নম্বর ধারণ করে। JavaScript-এ এটি কোনো দশমিক সংখ্যা (float) অথবা পূর্ণসংখ্যা (integer) হতে পারে।

সংখ্যার জন্য কোটেশন লাগে না। উদাহরণ:

let age = 16;      // পূর্ণসংখ্যা
let price = 99.99; // দশমিক সংখ্যা

এগুলো হলো number type ভ্যারিয়েবল।

// ৫. Boolan type variable  কি ও কি ভাবে লিখতে হয় ?
answer:Boolean type variable হলো এমন একটি ভ্যারিয়েবল, যা শুধুমাত্র দুইটি মান ধারণ করতে পারে: true বা false। এটি সাধারণত শর্ত পূরণের জন্য ব্যবহৃত হয়।

Boolean type variable লিখতে হলে নিচের মতো করা হয়:

let isStudent = true;   // সত্য মান
let hasLicense = false; // মিথ্যা মান

এগুলো হলো Boolean type ভ্যারিয়েবল।


// ৬. toUpperCase() & toLowerCase() এর ব্যাবহার কি ভাবে করতে হয় ? 
answer:toUpperCase() এবং toLowerCase() হলো JavaScript-এ string-এর মেথড, যা একটি string-কে যথাক্রমে বড় অক্ষরে বা ছোট অক্ষরে রূপান্তর করে।

ব্যবহার:

1. toUpperCase(): এটি string-এর সকল অক্ষরকে বড় অক্ষরে পরিবর্তন করে।

let text = "hello";
let upperText = text.toUpperCase();
console.log(upperText); // "HELLO"

2. toLowerCase(): এটি string-এর সকল অক্ষরকে ছোট অক্ষরে পরিবর্তন করে।

let text = "HELLO";
let lowerText = text.toLowerCase();
console.log(lowerText); // "hello"

// ৭. JavaScript এর মোট কয়টি অপারেটর আছে ও কি কি ?
answer:JavaScript-এ মোট পাঁচ ধরনের অপারেটর আছে। এগুলি হলো:

1. Arithmetic Operators (গণিতীয় অপারেটর):

+ (যোগ)

- (বিয়োগ)

* (গুণ)

/ (ভাগ)

% (মোডুলো বা অবশিষ্টাংশ)

++ (ইনক্রিমেন্ট)

-- (ডিক্রিমেন্ট)


2. Assignment Operators (অ্যাসাইনমেন্ট অপারেটর):

= (মান নির্ধারণ)

+= (যোগ এবং অ্যাসাইন)

-= (বিয়োগ এবং অ্যাসাইন)

*= (গুণ এবং অ্যাসাইন)

/= (ভাগ এবং অ্যাসাইন)

%= (মোডুলো এবং অ্যাসাইন)

3. Comparison Operators (তুলনা অপারেটর):

== (সমান)

=== (কড়া সমান)

!= (অসमान)

!== (কড়া অসামান্য)

> (বড়)

< (ছোট)

>= (বড় বা সমান)

<= (ছোট বা সমান)

4. Logical Operators (লজিক্যাল অপারেটর):

&& (লজিক্যাল AND)

|| (লজিক্যাল OR)

! (লজিক্যাল NOT)


5. Bitwise Operators (বিটওয়াইজ অপারেটর):

& (বিটওয়াইজ AND)

| (বিটওয়াইজ OR)

^ (বিটওয়াইজ XOR)

~ (বিটওয়াইজ NOT)

<< (বিট শিফট বাম)

>> (বিট শিফট ডান)

>>> (বিট শিফট ডান, পূর্ণ সংখ্যা)


এই অপারেটরগুলো JavaScript-এ বিভিন্ন কার্যক্রম এবং গণনা করার জন্য ব্যবহৃত হয়।


// ৮. Math.abs() এর ব্যাবহার লিখুন ।
answer:Math.abs() হলো JavaScript-এ একটি মেথড, যা একটি সংখ্যা গ্রহণ করে এবং সেই সংখ্যার পরম মান (absolute value) প্রদান করে। অর্থাৎ, এটি সংখ্যা যদি নেতিবাচক হয় তবে সেটিকে ইতিবাচক (positive) করে।

ব্যবহার:

let number1 = -10;
let absoluteValue1 = Math.abs(number1);
console.log(absoluteValue1); // 10

let number2 = 5;
let absoluteValue2 = Math.abs(number2);
console.log(absoluteValue2); // 5


// ৯. Math.celi()  এর ব্যাবহার লিখুন । 
answer:Math.ceil() হলো JavaScript-এ একটি মেথড, যা একটি সংখ্যা গ্রহণ করে এবং সেটির উপরের কাছের পূর্ণসংখ্যায় রাউন্ড করে। অর্থাৎ, এটি যেকোনো দশমিক সংখ্যা থেকে পরবর্তী পূর্ণসংখ্যা প্রদান করে।

ব্যবহার:

let number1 = 4.2;
let ceilValue1 = Math.ceil(number1);
console.log(ceilValue1); // 5

let number2 = -2.8;
let ceilValue2 = Math.ceil(number2);
console.log(ceilValue2); // -2

let number3 = 5.0;
let ceilValue3 = Math.ceil(number3);
console.log(ceilValue3); // 5


// ১০. Math.Floor() এর ব্যাবহার লিখুন । 
a answer:Math.floor() হলো JavaScript-এ একটি মেথড, যা একটি সংখ্যা গ্রহণ করে এবং সেটির নিচের কাছের পূর্ণসংখ্যায় রাউন্ড করে। অর্থাৎ, এটি যেকোনো দশমিক সংখ্যা থেকে নিম্নতম পূর্ণসংখ্যা প্রদান করে।

ব্যবহার:

let number1 = 4.7;
let floorValue1 = Math.floor(number1);
console.log(floorValue1); // 4

let number2 = -2.3;
let floorValue2 = Math.floor(number2);
console.log(floorValue2); // -3

let number3 = 5.0;
let floorValue3 = Math.floor(number3);
console.log(floorValue3); // 5


// ১১. Math.round() এর ব্যাবহার লিখুন ।
answer:Math.round() হলো JavaScript-এ একটি মেথড, যা একটি সংখ্যা গ্রহণ করে এবং সেটিকে নিকটতম পূর্ণসংখ্যায় রাউন্ড করে। এটি দশমিক সংখ্যার মান অনুসারে নিচের দিকে বা উপরের দিকে রাউন্ড করে।

ব্যবহার:

let number1 = 4.5;
let roundedValue1 = Math.round(number1);
console.log(roundedValue1); // 5

let number2 = 4.4;
let roundedValue2 = Math.round(number2);
console.log(roundedValue2); // 4

let number3 = -2.3;
let roundedValue3 = Math.round(number3);
console.log(roundedValue3); // -2

let number4 = -2.5;
let roundedValue4 = Math.round(number4);
console.log(roundedValue4); // -2 (নেতিবাচক সংখ্যার জন্যও নিকটতম পূর্ণসংখ্যা)

// ১২. Math.random() এর ব্যাবহার লিখুন ।
answer:Math.random() হলো JavaScript-এ একটি মেথড, যা 0 (শূন্য) থেকে 1 (এক) এর মধ্যে একটি র্যান্ডম দশমিক সংখ্যা প্রদান করে। এটি 0 (শূন্য) অন্তর্ভুক্ত এবং 1 (এক) অন্তর্ভুক্ত নয়।

ব্যবহার:

let randomValue = Math.random();
console.log(randomValue); // উদাহরণস্বরূপ: 0.123456789

০ থেকে ১০-এর মধ্যে র্যান্ডম সংখ্যা:

যদি আপনি ০ থেকে ১০-এর মধ্যে একটি র্যান্ডম সংখ্যা তৈরি করতে চান, তবে আপনি নিচের মতো করতে পারেন:

let randomValueInRange = Math.floor(Math.random() * 10);
console.log(randomValueInRange); // 0 থেকে 9 এর মধ্যে একটি সংখ্যা

১ থেকে ১০-এর মধ্যে র্যান্ডম সংখ্যা:

১ থেকে ১০-এর মধ্যে একটি র্যান্ডম সংখ্যা পেতে, আপনি নিচের মতো করতে পারেন:

let randomValueInRange = Math.floor(Math.random() * 10) + 1;
console.log(randomValueInRange); // 1 থেকে 10 এর মধ্যে একটি সংখ্যা

