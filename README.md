# Assignment-1-programming-hero-level-2

3. Explain the difference between any, unknown, and never types in TypeScript.

1. any — সবচেয়ে ঢিলা টাইপ
any টাইপ মানে হলো তুমি ভ্যারিয়েবলে যেকোনো ধরনের মান রাখতে পারো—সংখ্যা, স্ট্রিং, অবজেক্ট, ফাংশন—সবই চলবে।
let data: any = 10;
data = "hello";
data = true;

মূল পয়েন্ট:
TypeScript কোনো টাইপ-চেক করবে না।


ভুল করলেও ধরা পড়বে না।

কোড অস্থিতিশীল হতে পারে।



2. unknown — নিরাপদ কিন্তু flexible
unknown দেখতে any-এর মতো, কিন্তু এটা অনেক বেশি নিরাপদ।
এখানে মান যেকোনো কিছু হতে পারে, কিন্তু ব্যবহারের আগে অবশ্যই টাইপ-চেক করতে হবে।
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}

মূল পয়েন্ট:
এটি যেকোনো ভ্যালু নিতে পারে।


কিন্তু সরাসরি ব্যবহার করতে দেবে না।

ভুল টাইপ ব্যবহারের সম্ভাবনা কমে।


3. never — যে কখনোই ঘটে না
never এমন টাইপ যা কখনো কোনো ভ্যালু রিটার্ন করবে না।
এটা দুই ধরনের ক্ষেত্রে দেখা যায়:
(১) ফাংশন সবসময় error ছোড়ে
function fail(): never {
  throw new Error("Failed!");
}
(২) ফাংশন কখনো শেষ হয় না (infinite loop)
function loop(): never {
  while (true) {}
}

মূল পয়েন্ট:
কোনো মান রিটার্ন করার প্রশ্নই আসে না।

অত্যন্ত নির্দিষ্ট পরিস্থিতিতে ব্যবহার হয়।

কোডের লজিক্যাল ভুল ধরতে সাহায্য করে।




4. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

TypeScript-এ enum ব্যবহার করা হয় কিছু নির্দিষ্ট মানকে (values) এক জায়গায় গ্রুপ করে সংরক্ষণ করতে।
এটা কোডকে আরও পরিষ্কার, সাজানো এবং ভুল কম করতে সাহায্য করে।
কেন enum ব্যবহার করি?
একই ধরনের নির্দিষ্ট মানগুলোকে একসাথে রাখা যায়


কোড পড়তে ও বুঝতে সহজ হয়
ভুল স্ট্রিং বা সংখ্যা লেখা কমে যায়
পরিবর্তন বা আপডেট করা সহজ

উদাহরণ: ধরো, traffic signal এর মান ৩টা—“Red”, “Yellow”, “Green”—এগুলোকে enum দিয়ে সহজেই গ্রুপ করা যায়।

1. Numeric Enum 
Numeric enum-এ মানগুলো সংখ্যা হয়।
প্রথম মান দিলে পরের মানগুলো স্বয়ংক্রিয়ভাবে এক করে বাড়তে থাকে।
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(Direction.Up);     
console.log(Direction.Left);   
এখানে:
Up = 1
Down = 2
Left = 3
Right = 4



2. String Enum 
String enum-এ প্রতিটি মানকে একটি স্ট্রিং দিতে হয়।
এটা বেশি readable—মানে দেখে বোঝা যায়।
enum Status {
  Success = "SUCCESS",
  Failed = "FAILED",
  Pending = "PENDING",
}

console.log(Status.Success); 
