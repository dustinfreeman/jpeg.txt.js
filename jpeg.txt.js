// console.log('JPEG.TXT.JS');

quality = 50;

function replace_with_prob(txt, searchval, replaceval, prob)
{
	index = 0;
	index = txt.indexOf(searchval);
    while (index < txt.length && index >= 0)
	{
        if (Math.random() < (prob + (quality/100.0 - 0.5)) )
            txt = txt.substr(0, index) + replaceval + txt.substr(index + searchval.length);
		index = txt.indexOf(searchval, index + 1);
	}
    return txt;
}

function get_rid_of_repeats(txt, prob)
{
    index = 1;
    while (index < txt.length)
    {
        if (txt[index - 1] == txt[index] && Math.random() < (prob + (quality/100.0 - 0.5)) )
            txt = txt.substr(0, index - 1) + txt.substr(index);
        else
            index++;
    }
	return txt;
}

function do_make_jpeg_plz(txt)
{
    txt = txt.toLowerCase();
    txt = txt.split(" ");
    txt = txt.join(" ");

    txt = replace_with_prob(txt, "one", "1", 0.9);
    txt = replace_with_prob(txt, "two", "2", 0.9);
    txt = replace_with_prob(txt, "three", "3", 0.9);
    txt = replace_with_prob(txt, "four", "4", 0.9);
    txt = replace_with_prob(txt, "five", "5", 0.9);
    txt = replace_with_prob(txt, "six", "6", 0.9);
    txt = replace_with_prob(txt, "seven", "7", 0.9);
    txt = replace_with_prob(txt, "eight", "8", 0.9);
    txt = replace_with_prob(txt, "nine", "9", 0.9);
    txt = replace_with_prob(txt, "ten", "10", 0.9);
    txt = replace_with_prob(txt, "first", "1st", 0.9);
    txt = replace_with_prob(txt, "second", "2nd", 0.9);
    txt = replace_with_prob(txt, "third", "3rd", 0.9);

    txt = replace_with_prob(txt, "add", "+", 0.5);
    txt = replace_with_prob(txt, "subtract", "-", 0.5);
    txt = replace_with_prob(txt, "minus", "-", 0.5);

    txt = replace_with_prob(txt, "canad", "beav", 0.8);
    txt = replace_with_prob(txt, "says", "sez", 0.7);

    txt = get_rid_of_repeats(txt, 0.8);

    txt = replace_with_prob(txt, "ing ", "in' ", 0.7);
	txt = replace_with_prob(txt, "er", "r", 0.3);
    txt = replace_with_prob(txt, "er", "a", 0.3);
    txt = replace_with_prob(txt, "ed ", "'d ", 0.3);
    txt = replace_with_prob(txt, "pro", "bro", 0.4);
    txt = replace_with_prob(txt, "with", "w", 0.8);
    txt = replace_with_prob(txt, "and", "&", 0.8);

    txt = replace_with_prob(txt, " ", " ;) ", 0.05);
    txt = replace_with_prob(txt, "!", "!?", 0.8);
    txt = replace_with_prob(txt, "?", "!?", 0.8);

    txt = replace_with_prob(txt, "a", "", 0.1);
    txt = replace_with_prob(txt, "e", "", 0.1);
    txt = replace_with_prob(txt, "i", "", 0.1);
    txt = replace_with_prob(txt, "o", "", 0.1);
    txt = replace_with_prob(txt, "u", "", 0.1);

    txt = replace_with_prob(txt, "ate", "8", 0.8);
    txt = replace_with_prob(txt, "i", "1", 0.5);
    txt = replace_with_prob(txt, "e", "3", 0.2);
    txt = replace_with_prob(txt, "a", "4", 0.05);
    txt = replace_with_prob(txt, "o", "0", 0.2);

    txt = replace_with_prob(txt, " ", "", 0.1);
    txt = replace_with_prob(txt, " ", "-", 0.05);
    txt = replace_with_prob(txt, "'", "", 1.0);
    
    return txt;
}

if (process && process.argv.length > 2)
	txt = process.argv[2];
	jpeg_txt = do_make_jpeg_plz(txt);
	console.log(jpeg_txt);
