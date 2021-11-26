user = {};
user.name='John';
user.surname='Mike';
user.name='Preter';
delete user.name;

var fruit = {
apple: 20,
pear: 20,
peach: 10
};

sum = 0;
for(const f in fruit)
{
	sum += fruit[f];
}
console.log(sum);
