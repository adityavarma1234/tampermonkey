# tampermonkey
Tamper Monkey Scripts

### Quora

##### Before

[![alt text][before]][before]

[![alt text][follow_before]][follow_before]


[![alt text][views_count_before]][views_count_before]

##### After

[![alt text][after]][after]


[![alt text][follow_after]][follow_after]

[![alt text][views_count_after]][views_count_after]


Hi Quorans,

I am strongly biased to most up voted answers, which results in me missing out on valuable answers with less up votes. This has been happening quite often lately.

So to solve this problem (I mostly use Quora on chrome), to hide the count of number of up votes to an answer, I used an add on called [Tamper monkey][tp_link] for chrome and wrote a 10 line [java script][repo_link].

Additionally the script removes comments count, followers count of a topic etc. You have to import the script ([check here][tp_new] on how to add a new user script) in tamper monkey as it is and reload any tabs for it to take effect.

For FireFox users you can use [grease monkey][gm_link], need to [import][gm_new] the script. 

For Safari you can use [tamper monkey][tp_link].
Hope some one finds this useful.

[Feedback][feedback] appreciated. 

[tp_link]: <https://tampermonkey.net/>
[repo_link]: <https://github.com/adityavarma1234/tampermonkey/blob/master/Quora/Quora%20hide%20count.user.js>
[tp_new]: <http://hibbard.eu/tampermonkey-tutorial/>
[gm_link]: <https://www.google.co.in/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CBwQFjAAahUKEwj3xNzO147JAhWQC44KHfH2BJ8&url=https%3A%2F%2Faddons.mozilla.org%2Fen%2Ffirefox%2Faddon%2Fgreasemonkey%2F&usg=AFQjCNElj3Ji6nDxEWpzSo0sukEGG5LtKA&sig2=pxCW-odhtzcyUvezD-HG7w&bvm=bv.107467506,d.c2E>
[gm_new]: <http://wiki.greasespot.net/Greasemonkey_Manual:Installing_Scripts>
[before]: <https://github.com/adityavarma1234/tampermonkey/blob/master/Quora/images/before/before.png?raw=true>
[after]: <https://github.com/adityavarma1234/tampermonkey/blob/master/Quora/images/after/after.png?raw=true>
[follow_before]: <https://github.com/adityavarma1234/tampermonkey/blob/master/Quora/images/before/follow.png?raw=true>
[follow_after]: <https://github.com/adityavarma1234/tampermonkey/blob/master/Quora/images/after/follow.png?raw=true>
[feedback]: <https://github.com/adityavarma1234/tampermonkey/issues/new?title=Your%20question%20for%20me&body=Feel%20free%20to%20Ask%20me%20anything!>
[views_count_after]: <https://github.com/adityavarma1234/tampermonkey/blob/master/Quora/images/after/views_count_after.png?raw=true>
[views_count_before]: <https://github.com/adityavarma1234/tampermonkey/blob/master/Quora/images/before/views_count_before.png?raw=true>
