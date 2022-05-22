module.exports = {
  answers: [
    `
    class Solution {
        public:
        vector<int> twoSum(vector<int>& nums, int target) {
            unordered_map<int, int> imap;
            
            for (int i = 0;; ++i) {
                auto it = imap.find(target - nums[i]);
                
                if (it != imap.end()) 
                    return vector<int> {i, it->second};
                    
                imap[nums[i]] = i;
            }
        }
        };
    `,
    `class Solution {
        public:
            ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
                ListNode *dummy = new ListNode(0);
                ListNode *curr = dummy;
                int carry = 0;
                
                while(l1 != NULL || l2 != NULL || carry == 1){
                    int sum = 0;
                    if(l1 != NULL){
                        sum += l1->val;
                        l1 = l1->next;
                    }
                    if(l2 != NULL){
                        sum += l2->val;
                        l2 = l2->next;
                    }
                    sum += carry;
                    carry = sum/10;
                    ListNode *node = new ListNode(sum % 10);
                    curr->next = node;
                    curr = curr->next;
                }
                return dummy->next;
            }
        };
    `,
    `
    class Solution {
        public:
            int lengthOfLongestSubstring(string s) {
                int store[256]={0}; 
                int l=0;  
                int r=0;   
                int ans=0;  
                while(r<s.length())
                {
                    store[s[r]]++;
                    
                    while(store[s[r]]>1) 
                    { 
                        store[s[l]]--;   
                        l++;     
                    }
                    ans = max(ans,r-l+1);   
                    r++;      
                }
                return ans;
            }
        };
    `,
    `class Solution {
        public:
            double mediann(vector<int>&a,vector<int>&b){
                int m=a.size();
                int n=b.size();
                if(m>n)
                    return mediann(b,a);
                int l=0,r=m;
                while(l<=r){
                    int partx=l+(r-l)/2;
                    int party=(m+n+1)/2-partx;
                    int maxlx=(partx==0)?INT_MIN:a[partx-1];
                    int minrx=(partx==m)?INT_MAX:a[partx];
                    int maxly=(party==0)?INT_MIN:b[party-1];
                    int minry=(party==n)?INT_MAX:b[party];
                    if(maxlx<=minry&&maxly<=minrx){
                        if((m+n)%2==0)
                            return (double)(max(maxlx,maxly)+min(minrx,minry))/2;
                        else
                            return (double)(max(maxlx,maxly));
                    }else if(maxlx>minry)
                        r=partx-1;
                    else
                        l=partx+1;
                }
                return -1.0;
            }
            double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
                double ans;
                ans=mediann(nums1,nums2);
                return ans;   
            }
        };
    `,
    `class Solution {
        public:
             string longestPalindrome(string s) 
        {   
            int len = s.size();
            int dp[len][len];
            memset(dp,0,sizeof(dp));
            int end=1;
            int start=0;
            
            for(int i=0;i<len;i++)
            {
                dp[i][i] = 1;
            }
            for(int i=0;i<len-1;i++)
            {
                if(s[i]==s[i+1])
                { dp[i][i+1]=1;start=i;end=2;}
            }
            
            for(int j=2;j<len;j++)
            {
                for(int i=0;i< len-j;i++)
                {  
                    int left=i; //start point
                    int right = i+j;  //ending point
                    
                    if(dp[left+1][right-1]==1 && s[left]==s[right]) 
                    {
                        dp[left][right]=1; start=i; end=j+1; 
                    }        
                }
            }
           return s.substr(start, end);
        }
        };
    `,
  ],
};
