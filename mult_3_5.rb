def sum list
    tot=0;
    list.each {|i| tot += i}
    return tot
end

def get_multiples of,max
    mults = []
    of.each {|i|
        ((max-1)/i).times do |k|
            mults.push((k+1)*i)
        end
        
        }
    return mults
end

mults = ARGV[0].split(',').map {|o| o.to_i}
max = ARGV[1].to_i
puts sum get_multiples mults,max